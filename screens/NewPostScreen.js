import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import AddNewPost from '../components/AddNewPost'

const NewPostScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <AddNewPost />
    </SafeAreaView>
  )
}

export default NewPostScreen

const styles = StyleSheet.create({})
