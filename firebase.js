import { initializeApp, getApps } from 'firebase/app'
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth'
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  doc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  collectionGroup,
  arrayUnion,
  arrayRemove,
  updateDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBbKdyOo4PvQJvzUi3XLtV0XRiDrO9uL7E',
  authDomain: 'instagram-clone-c3afa.firebaseapp.com',
  projectId: 'instagram-clone-c3afa',
  storageBucket: 'instagram-clone-c3afa.appspot.com',
  messagingSenderId: '626592908838',
  appId: '1:626592908838:web:05930a427176c1bab1c8e7',
}

if (!getApps().length) initializeApp(firebaseConfig)

export {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  collection,
  collectionGroup,
  addDoc,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  getDoc,
  getDocs,
  setDoc,
  doc,
  arrayUnion,
  arrayRemove,
  updateDoc,
}
