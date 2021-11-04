import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const PostImage = ({ post }) => {
  return (
    <View style={{ width: '100%', height: 450 }}>
      <Image
        source={{ uri: post.imageUrl }}
        style={{ height: '100%', resizeMode: 'cover' }}
      />
    </View>
  )
}

export default PostImage

const styles = StyleSheet.create({})
