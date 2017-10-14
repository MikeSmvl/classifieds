import firebase from 'firebase'
import {rootRef} from '../main.js'
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
      retrieveCategoryList({commit})
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
      date: payload.date,
      keyCategory: payload.keyCategory
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
  getCategories ({commit}) {
    retrieveCategoryList({commit})
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
  /*
  let categoryList = new Array(8)
  categoryList.push({ name: 'Acheter et vendre', key: 'Acheter et vendre' })
  categoryList.push({ name: 'Autos et véhicules', key: 'Autos et véhicules' })
  categoryList.push({ name: 'Immobilier', key: 'Immobilier' })
  categoryList.push({ name: 'Animaux', key: 'Animaux' })
  categoryList.push({ name: 'Emplois', key: 'Emplois' })
  categoryList.push({ name: 'Services', key: 'Services' })
  categoryList.push({ name: 'Locations de vacances', key: 'Locations de vacances' })
  categoryList.push({ name: 'Communauté', key: 'Communauté' })
  */
  // {"key":0,"name":"All"} f
  // const v = '[{"key":1,"name":"Books","subCategories":[{"key":1,"name":"Hardcover"}]},{"key":2,"name":"Movies"}]'
  var v = '[{"key":"Acheter et vendre","name":"Acheter et vendre"},{"key":"Autos et véhicules","name":"Autos et véhicules"},{"key":"Immobilier","name":"Immobilier"},{"key":"Animaux","name":"Animaux"},{"key":"Emplois","name":"Emplois"},{"key":"Services","name":"Services"},{"key":"Locations de vacances","name":"Locations de vacances"},{"key":"Communauté","name":"Communauté"}]'
  var categoryList = JSON.parse(v)
  commit('setCategoryList', categoryList)
}
