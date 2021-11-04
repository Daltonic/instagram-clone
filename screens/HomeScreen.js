import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
})
