import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const PostHeader = ({ post }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
        <Text style={styles.userName}>{post.user}</Text>
      </View>
      <Text style={{ color: 'white', fontWeight: 700 }}>...</Text>
    </View>
  )
}

export default PostHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center',
  },
  story: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.5,
    borderColor: '#ff8501',
  },
  userName: {
    fontWeight: 700,
    color: 'white',
    marginLeft: 5,
  },
})
