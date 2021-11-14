import React from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Platform,
} from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import { getAuth, createUserWithEmailAndPassword } from '../firebase'
import { getFirestore, setDoc, doc } from '../firebase'

const signUpFormSchema = Yup.object().shape({
  email: Yup.string().email().required('An email is required'),
  username: Yup.string().required('A user is required'),
  password: Yup.string()
    .required()
    .min(6, 'Password needs to be at least 6 characters long'),
})

const SignUpForm = ({ navigation }) => {
  const auth = getAuth()
  const db = getFirestore()

  const getRandomUserPicture = async () => {
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    return data.results[0].picture.large
  }

  const onSignup = async (email, password, username) => {
    try {
      const authed = await createUserWithEmailAndPassword(auth, email, password)
      console.log('Firebase Signed Up Successful')

      const userDocRef = doc(db, 'users', authed.user.email)
      await setDoc(userDocRef, {
        username,
        email,
        pic: await getRandomUserPicture(),
        uid: authed.user.uid,
      })
    } catch (error) {
      Platform.OS != 'web' ? Alert.alert(error.message) : alert(error.message)
    }
  }

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: '', password: '', username: '' }}
        onSubmit={(values) =>
          onSignup(values.email, values.password, values.username)
        }
        validationSchema={signUpFormSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? '#ccc'
                      : 'red',
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.username.length || values.username.length >= 3
                      ? '#ccc'
                      : 'red',
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Username"
                autoCapitalize="none"
                textContentType="username"
                autoFocus={true}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? '#ccc'
                      : 'red',
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                textContentType="password"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>

            <View style={{ alignItems: 'flex-end', marginBottom: 10 }}>
              <Text style={{ color: '#6bb8f5' }}>Forget Password?</Text>
            </View>

            <Pressable
              titleSize={20}
              style={styles.button}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <View style={styles.signupContainer}>
              <Text>Already a member? </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: '#6bb0f5' }}>Login Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  )
}

export default SignUpForm

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#0096f6',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 600,
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 50,
    justifyContent: 'center',
  },
})
