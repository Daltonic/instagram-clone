import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICONS } from '../data/icons'

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <PostHeader post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostImage post={post} />
        <PostFooter />
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
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
        <Text style={styles.userName}>{post.user}</Text>
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

const PostFooter = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
      }}
    >
      <View style={styles.leftFooterIconContainer}>
        <Icon imgStyle={styles.footerIcon} imgUrl={ICONS[0].imageUrl} />
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
      {post.likes.toLocaleString('en')} likes
    </Text>
  </View>
)

const PostCaption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: 'white' }}>
      <Text style={{ fontWeight: 600 }}>{post.user}</Text>
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
