import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import SignUpForm from '../components/SignUpForm'

const INSTAGRAM_LOGO =
  'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: INSTAGRAM_LOGO, width: 100, height: 100 }} />
      </View>
      <SignUpForm navigation={navigation} />
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    marginHorizontal: 12,
    height: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
})
