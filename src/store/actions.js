import firebase from 'firebase'
import {rootRef} from '../main.js'
import router from '@/router'

const categoryJsonObject = require('../category.response.json')

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
  filterSubCategory ({commit}, payload) {
    var keyCategory = payload.keyCategory
    var subCategoryList = ''
    for (var i = 0; i < categoryJsonObject.length; i++) {
      var c = categoryJsonObject[i].key
      if (c === keyCategory) {
        if (categoryJsonObject[i].subCategories !== undefined) {
          subCategoryList = categoryJsonObject[i].subCategories
        }
      }
    }
    commit('setSubCategoryList', subCategoryList)
  },
  search ({ commit }, payload) {
    const input = {
      searchInput: payload.searchInput
    }
    firebase.database().ref('ads').orderByChild('title').startAt(input.searchInput).endAt(input.searchInput + '\uf8ff')
      .once('value').then(function (snapshot) {
        // Creates an array with length of snapshot size
        let searchList = new Array(Object.keys(snapshot).length)
        // Pushes data into the array
        snapshot.forEach(ad => {
          searchList.push({
            date: ad.val().date,
            description: ad.val().description,
            imageUrl: ad.val().imageUrl,
            location: ad.val().location,
            title: ad.val().title,
            key: ad.key
          })
        })
        // Filter out the items that are null
        const reformattedSearchList = searchList.filter(ad => ad !== null)
        // Mutate the AdList by modifying the state
        commit('setSearchList', reformattedSearchList)
        router.push('/searchresults')
      }
      )
  }
}

const retrieveAdList = ({commit}) => {
  rootRef.orderByValue().on('value', (snapshot) => {
    // Creates an array with length of snapshot size
    let adList = new Array(Object.keys(snapshot).length)
    // Pushes data into the array
    snapshot.forEach(ad => {
      adList.push({
        date: ad.val().date,
        description: ad.val().description,
        imageUrl: ad.val().imageUrl,
        location: ad.val().location,
        title: ad.val().title,
        key: ad.key
      })
    })
    // Filter out the items that are null
    const reformattedAdList = adList.filter(ad => ad !== null)
    // Mutate the AdList by modifying the state
    commit('setAdList', reformattedAdList)
  })
}

const retrieveCategoryList = ({commit}) => {
  commit('setCategoryList', categoryJsonObject)
}
