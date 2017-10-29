import firebase from 'firebase'
import { firebaseConfig } from '../config'

firebase.initializeApp(firebaseConfig)

export const userActions = {
  signUp(payload) { //returns a Promise
    return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
  },
  signIn(payload) { //returns a Promise
    return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
  },
  signOut() { //returns a Promise void
   return firebase.auth().signOut()
  },
  delete() { //returns a Promise
    return firebase.auth().currentUser().delete()
  }
}
