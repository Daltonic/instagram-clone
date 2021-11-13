import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import BottomTabs from '../components/BottomTabs'
import Header from '../components/Header'
import Post from '../components/Post'
import Stories from '../components/Stories'
import { POSTS } from '../data/posts'
import { TABS } from '../data/tabs'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={TABS} />
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
