import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICONS } from '../data/icons'
import {
  getAuth,
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from '../firebase'

const Post = ({ post }) => {
  const auth = getAuth()
  const db = getFirestore()

  const handleLike = async (post) => {
    const currentLikeStatus = !post.liked.includes(auth.currentUser.email)
    const likesRef = doc(db, `users/${post.email}/posts`, post.id)

    try {
      await updateDoc(likesRef, {
        liked: currentLikeStatus
          ? arrayUnion(auth.currentUser.email)
          : arrayRemove(auth.currentUser.email),
      })
      console.log('Document successfully updated!')
    } catch (error) {
      console.log('Error updating document: ', error)
    }
  }

  return (
    <View style={{ marginBottom: 30 }}>
      <PostHeader post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostImage post={post} />
        <PostFooter post={post} handleLike={handleLike} />
        <PostLikes post={post} />
        <PostCaption post={post} />
        <PostCommentSection post={post} />
        <PostComments post={post} />
      </View>
    </View>
  )
}

const PostHeader = ({ post }) => {
  return (
    <View style={styles.headerContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Image source={{ uri: post.pic }} style={styles.story} />
        <Text style={styles.userName}>{post.username}</Text>
      </View>
      <Text style={{ color: 'white', fontWeight: 700 }}>...</Text>
    </View>
  )
}

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

const PostFooter = ({ handleLike, post }) => {
  const auth = getAuth()
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
      }}
    >
      <View style={styles.leftFooterIconContainer}>
        <TouchableOpacity onPress={() => handleLike(post)}>
          <Image
            style={styles.footerIcon}
            source={{
              uri: post.liked.includes(auth.currentUser.email)
                ? ICONS[0].likedImageUrl
                : ICONS[0].imageUrl,
            }}
          />
        </TouchableOpacity>
        <Icon imgStyle={styles.footerIcon} imgUrl={ICONS[1].imageUrl} />
        <Icon imgStyle={styles.footerIcon} imgUrl={ICONS[2].imageUrl} />
      </View>

      <View>
        <Icon imgStyle={styles.footerIcon} imgUrl={ICONS[3].imageUrl} />
      </View>
    </View>
  )
}

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
)

const PostLikes = ({ post }) => (
  <View style={{ flexDirection: 'row', marginTop: 5 }}>
    <Text style={{ color: 'white', fontWeight: 600 }}>
      {post.liked.length.toLocaleString('en')} likes
    </Text>
  </View>
)

const PostCaption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: 'white' }}>
      <Text style={{ fontWeight: 600 }}>{post.username}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
)

const PostCommentSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: 'gray' }}>
        View{post.comments.length > 1 ? 'all' : ''} {post.comments.length}{' '}
        {post.comments.length > 1 ? 'comments' : 'comment'}
      </Text>
    )}
  </View>
)

const PostComments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
        <Text style={{ color: 'white' }}>
          <Text style={{ fontWeight: 600 }}>{comment.user}</Text>{' '}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
)

export default Post

const styles = StyleSheet.create({
  headerContainer: {
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
  footerIcon: {
    height: 33,
    width: 33,
  },
  leftFooterIconContainer: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'space-between',
  },
})
