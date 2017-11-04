import firebase from 'firebase'

export const adActions = {
  
  createAd (payload) { // Returns a reference to ad
    const ad = {
      title: payload.title,
      location: payload.location,
      imageUrl: payload.imageUrl,
      description: payload.description,
      date: payload.date,
      keyCategory: payload.keyCategory
    }
    return firebase.database().ref('ads').push(ad)
  },
  removeAd (payload) {
    firebase.database().ref('ads').orderByChild('title').startAt(payload.title).endAt(payload.title + '\uf8ff')
    .once('value').then(function (snapshot) {
      // Pushes data into the array
      snapshot.forEach(ad => {
        var adsRef = firebase.database().ref('ads/' + ad.key)
        adsRef.remove()
        .then(() => {
          console.log('Ad removal succeeded.')
        })
        .catch((error) => {
          console.log('Ad removal failed: ' + error.message)
        })
      })
    })
  },
  findAll () {
    firebase.database().ref('ads').orderByValue().on('value', (snapshot) => {
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
      console.log(reformattedAdList);
      return reformattedAdList
    })
  }
}
