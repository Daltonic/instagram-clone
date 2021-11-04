import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PostHeader from './postHeader'
import PostImage from './postImage'

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <PostHeader post={post} />
      <PostImage post={post} />
    </View>
  )
}

export default Post

const styles = StyleSheet.create({})
