import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LoginForm from '../components/LoginForm'

const INSTAGRAM_LOGO =
  'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={{ uri: INSTAGRAM_LOGO, width: 100, height: 100 }} />
        </View>
        <LoginForm />
      </View>
  )
}

export default LoginScreen

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
