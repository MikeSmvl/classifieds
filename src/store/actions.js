import firebase from 'firebase'
import {rootRef} from '../main.js'
import router from '@/router'
import {userActions} from './actions.user'
import {categoryActions} from './actions.category'
import {adActions} from './actions.ad'

export const actions = {
  userSignUp ({commit}, payload) {
    commit('setLoading', true)
    userActions.signUp({ email: payload.email, password: payload.password })
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
    userActions.signIn({ email: payload.email, password: payload.password })
    .then(firebaseUser => {
      commit('setUser', firebaseUser)
      retrieveAdList({commit})
      commit('setCategoryList', categoryActions.getList())
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
    userActions.signOut()
    commit('setUser', null)
    router.push('/')
  },
  createAd ({commit}, payload) {
    adActions.createAd(payload)
      .then((data) => {
        alert('Ad Created')
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getCategories ({commit}) {
    commit('setCategoryList', categoryActions.getList())
  },
  filterSubCategory ({commit}, payload) {
    commit('setSubCategoryList', categoryActions.getSubCategory(payload))
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
