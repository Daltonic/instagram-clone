import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const AddNewPost = () => (
  <View style={styles.container}>
    <Header />
  </View>
)

const Header = () => (
  <View style={styles.headerContainer}>
    <TouchableOpacity>
      <Image
        source={{
          uri: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/back--v1.png',
        }}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>NEW POST</Text>
  </View>
)

export default AddNewPost

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 700,
    fontSize: 20,
    marginRight: 25,
  },
})
