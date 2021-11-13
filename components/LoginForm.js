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
import { getAuth, signInWithEmailAndPassword } from '../firebase'

const loginFormSchema = Yup.object().shape({
  email: Yup.string().email().required('A email is required'),
  password: Yup.string()
    .required()
    .min(6, 'Password needs to be at least 6 characters long'),
})

const auth = getAuth()

const LoginForm = ({ navigation }) => {
  const onLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log('Firebase Login Successful')
    } catch (error) {
      Platform.OS != 'web' ? Alert.alert(error.message) : alert(error.message)
    }
  }

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => onLogin(values.email, values.password)}
        validationSchema={loginFormSchema}
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
                placeholder="Phone Number, username, or email"
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
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>

            <View style={styles.signupContainer}>
              <Text>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.push('SignUpScreen')}>
                <Text style={{ color: '#6bb0f5' }}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  )
}

export default LoginForm

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
