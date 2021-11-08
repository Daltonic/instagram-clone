import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import validUrl from 'valid-url'

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached maximum characters'),
})

const PLACEHOLDER_IMG =
  'https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder.jpeg'

const FormikPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)

  return (
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={(values) => {
        console.log(values, 'Your post was successfully share!')
        navigation.goBack()
      }}
      validationSchema={uploadPostSchema}
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
            style={{
              margin: 20,
              flexDirection: 'row',
            }}
          >
            <Image
              source={{
                uri: validUrl.isUri(thumbnailUrl) || PLACEHOLDER_IMG,
              }}
              style={{ width: 100, height: 100, borderRadius: 9 }}
            />
            <TextInput
              style={{ color: 'white', fontSize: 20, marginLeft: 10, flex: 1 }}
              placeholder="Write a caption..."
              placeholderTextColor="gray"
              multiline={true}
              onChangeText={handleChange('caption')}
              onBlur={handleBlur('caption')}
              value={values.caption}
            />
          </View>
          <TextInput
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            style={{ color: 'white', fontSize: 18 }}
            placeholder="Enter image URL"
            placeholderTextColor="gray"
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ fontSize: 20, color: 'red' }}>
              {errors.imageUrl}
            </Text>
          )}
          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  )
}

export default FormikPostUploader

const styles = StyleSheet.create({})
