import firebase from 'firebase'
import {rootRef, rootCategories} from '../main.js'
import router from '@/router'
export const actions = {
  userSignUp ({commit}, payload) {
    commit('setLoading', true)
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    .then(firebaseUser => {
      commit('setUser', firebaseUser)
      retrieveAdList({commit})
      commit('setLoading', false)
      router.push('/home')
    })
    .catch(error => {
      commit('setError', error.message)
      commit('setLoading', false)
      commit('setError', null)
    })
  },
  userSignIn ({commit}, payload) {
    commit('setLoading', true)
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    .then(firebaseUser => {
      commit('setUser', firebaseUser)
      retrieveAdList({commit})
      commit('setLoading', false)
      commit('setError', null)
      router.push('/home')
    })
    .catch(error => {
      commit('setError', error.message)
      commit('setLoading', false)
    })
  },
  autoSignIn ({commit}, payload) {
    commit('setUser', payload)
  },
  userSignOut ({commit}) {
    firebase.auth().signOut()
    commit('setUser', null)
    router.push('/')
  },
  createAd ({commit}, payload) {
    const ad = {
      title: payload.title,
      location: payload.location,
      imageUrl: payload.imageUrl,
      description: payload.description,
      date: payload.date
    }
    firebase.database().ref('ads').push(ad)
      .then((data) => {
        alert('Ad Created')
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  createCategory ({commit}, payload) {
    const category = {
      name: payload.name,
      description: payload.description
    }
    firebase.database().ref('categories').push(category)
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
    router.push('/categories')
  },
  saveCategory ({commit}, payload) {
    const category = {
      name: payload.name,
      description: payload.description
    }
    var recordRef = firebase.database().ref('categories').child(payload.key)
    recordRef.update(category)
    router.push('/categories')
  },
  getCategories ({commit}) {
    retrieveCategoryList({commit})
  },
  deleteCategory ({commit}, payload) {
    firebase.database().ref('categories').child(payload.key).remove()
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
    router.push('/categories')
  },
  editCategory ({commit}, payload) {
    firebase.database().ref('categories').child(payload.key).once('value', (snapshot) => {
      // Pushes data into the array
      var data = snapshot.val()
      var id = snapshot.key
      const categoryObj = {
        name: data.name,
        description: data.description,
        key: id
      }
      // Mutate the AdList by modifying the state
      commit('setCategory', categoryObj)
    })
    router.push('/editCategory')
  }
}

const retrieveAdList = ({commit}) => {
  rootRef.orderByValue().on('value', (snapshot) => {
    // Creates an array with length of snapshot size
    let adList = new Array(Object.keys(snapshot).length)
    // Pushes data into the array
    snapshot.forEach(ad => {
      adList.push(ad.val())
    })
    // Filter out the items that are null
    const reformattedAdList = adList.filter(ad => ad !== null)
    // Mutate the AdList by modifying the state
    commit('setAdList', reformattedAdList)
  })
}

const retrieveCategoryList = ({commit}) => {
  rootCategories.orderByValue().on('value', (snapshot) => {
    // Creates an array with length of snapshot size
    let categoryList = new Array(Object.keys(snapshot).length)
    // Pushes data into the array
    snapshot.forEach(category => {
      var data = category.val()
      var id = category.key
      const categoryObj = {
        name: data.name,
        description: data.description,
        key: id
      }
      categoryList.push(categoryObj)
    })
    // Filter out the items that are null
    const reformattedCategoryList = categoryList.filter(category => category !== null)
    // Mutate the AdList by modifying the state
    commit('setCategoryList', reformattedCategoryList)
  })
}
