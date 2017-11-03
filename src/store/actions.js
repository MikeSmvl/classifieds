import firebase from 'firebase'
import { rootRef } from '../main.js'
import router from '@/router'

const categoryJsonObject = require('../category.response.json')

export const actions = {
  userSignUp({ commit }, payload) {
    commit('setLoading', true)
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        commit('setUser', firebaseUser)
        retrieveAdList({ commit })
        commit('setLoading', false)
        router.push('/home')
      })
      .catch(error => {
        commit('setError', error.message)
        commit('setLoading', false)
      })
  },
  userSignIn({ commit }, payload) {
    commit('setLoading', true)
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        commit('setUser', firebaseUser)
        retrieveAdList({ commit })
        retrieveCategoryList({ commit })
        commit('setLoading', false)
        commit('setError', null)
        router.push('/home')
      })
      .catch(error => {
        commit('setError', error.message)
        commit('setLoading', false)
      })
  },
  getOwnerAds({ commit }) {
    const userKey = firebase.auth().currentUser.uid
    // Gets the corresponding ownerAd Model
    firebase
      .database()
      .ref('ownerAds')
      .once('value', snapshot => {
        snapshot.forEach(model => {
          if (model.val().userKey === userKey) {
            const adKeyList = model.val().adKeyList

            firebase
              .database()
              .ref('ads')
              .once('value', snapshot => {
                let newArray = []

                snapshot.forEach(ad => {
                  adKeyList.forEach(adKey => {
                    if (adKey === ad.key) {
                      newArray.push(ad.val())
                    }
                  })
                })
                commit('setOwnerAdList', newArray)
              })
          }
        })
      })
  },
  autoSignIn({ commit }, payload) {
    commit('setUser', payload)
  },
  userSignOut({ commit }) {
    firebase.auth().signOut()
    commit('setUser', null)
    router.push('/')
  },
  createAd({ commit }, payload) {
    const ad = {
      title: payload.title,
      location: payload.location,
      imageUrl: payload.imageUrl,
      description: payload.description,
      date: payload.date,
      keyCategory: payload.keyCategory
    }
    firebase
      .database()
      .ref('ads')
      .push(ad)
      .then(data => {
        alert('Ad Created')
        console.log(data)
        createAdOwnerLink(data.key)
      })
      .catch(error => {
        console.log(error)
      })
  },
  filterSubCategory({ commit }, payload) {
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
  search({ commit }, payload) {
    const input = {
      searchInput: payload.searchInput
    }
    firebase
      .database()
      .ref('ads')
      .orderByChild('title')
      .startAt(input.searchInput)
      .endAt(input.searchInput + '\uf8ff')
      .once('value')
      .then(function(snapshot) {
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
      })
  }
}

const createAdOwnerLink = payload => {
  const userKey = firebase.auth().currentUser.uid
  const adKey = payload
  const ownerAds = { userKey: userKey, adKeyList: [adKey] }

  firebase
    .database()
    .ref('ownerAds')
    .once('value', snapshot => {
      // Check if the owner is in one of those model
      let isUpdated = false
      snapshot.forEach(owner => {
        console.log(owner)
        // If key matches current user, update Ad list
        if (owner.val().userKey === userKey) {
          isUpdated = true
          const newAdList = owner.val().adKeyList
          newAdList.push(adKey)
          const updatedOwnerAds = {
            userKey: userKey,
            adKeyList: newAdList
          }
          var updates = {}
          updates['/ownerAds/' + owner.key] = updatedOwnerAds

          // Update to database
          firebase
            .database()
            .ref()
            .update(updates)
        }
      })

      // If no owner is matched, create a new model
      if (!isUpdated) {
        firebase
          .database()
          .ref('ownerAds')
          .push(ownerAds)
          .then(data => {
            console.log('Linked to owner', data)
          })
          .catch(err => {
            console.log(err)
          })
      }
    })
}

const retrieveAdList = ({ commit }) => {
  rootRef.orderByValue().on('value', snapshot => {
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

const retrieveCategoryList = ({ commit }) => {
  commit('setCategoryList', categoryJsonObject)
}
