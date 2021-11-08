import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import AddNewPost from '../components/AddNewPost'

const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  )
}

export default NewPostScreen

const styles = StyleSheet.create({})
