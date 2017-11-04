import firebase from 'firebase'

export const userActions = {
  signUp (payload) {
    return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
  },
  signIn (payload) {
    return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
  },
  signOut () {
    return firebase.auth().signOut()
  },
  deleteUser (firebaseUser) {
    return firebaseUser.delete()
  },
  getAuthenticatedUser () {
    return firebase.auth().currentUser
  }
}
