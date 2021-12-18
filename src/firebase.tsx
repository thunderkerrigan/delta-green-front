// Import the functions you need from the SDKs you need
import React from 'react'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
  EmailAuthProvider,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
import * as firebaseui from 'firebaseui'
import { useAppDispatch } from './redux/store'
import { connect, setLoading } from './redux/UserSlice'
import useTimeout from './hooks/useTimeout'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBnscWGWYehYc-rnLjmDxP5V0irvEUlwJY',
  authDomain: 'delta-green-toolbox.firebaseapp.com',
  databaseURL:
    'https://delta-green-toolbox-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'delta-green-toolbox',
  storageBucket: 'delta-green-toolbox.appspot.com',
  messagingSenderId: '73359875305',
  appId: '1:73359875305:web:e96b5413d84d3b2fe4a478',
  measurementId: 'G-MS4TLN4RBD',
}

export const uiConfig: firebaseui.auth.TenantConfig = {
  signInSuccessUrl: window.location.origin,
  siteName: 'Delta Green Pizza',

  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    EmailAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
    TwitterAuthProvider.PROVIDER_ID,
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: `${document.location.origin}/tos`,
  // Privacy policy url/callback.
  privacyPolicyUrl: function () {
    window.location.assign(`${document.location.origin}/privacy`)
  },
  signInFlow: 'popup',
  callbacks: {
    signInSuccessWithAuthResult: (authResult, redirectUrl) => {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true
    },
  },
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const analytics = getAnalytics()
setPersistence(auth, browserLocalPersistence)
export const authUIInstance = new firebaseui.auth.AuthUI(auth)

export const FirebaseAuthProvider = (): null => {
  const dispatch = useAppDispatch()
  const { clear } = useTimeout(
    () => dispatch(setLoading(false)),
    3200,
  )

  onAuthStateChanged(auth, async (user) => {
    console.log('onAuthStateChanged')
    if (user) {
      clear()
      console.log('onAuthStateChanged : user!')
      console.log(user)
      dispatch(connect())
      dispatch(setLoading(false))
      // 1. mark user as authenticated
      // 2. fetch characters
    }
  })
  return null
}
