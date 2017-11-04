import firebase from 'firebase'
import { adActions } from '../../src/store/actions.ad'
import { userActions } from '../../src/store/actions.user'
import { mutations } from '../../src/store/mutations'
import { firebaseConfig } from '../../src/config'


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

const expect = chai.expect
const assert = chai.assert

describe('Ad component', () => {

  before(function() {
    userActions.signUp({ email: 'adUser.testing@gmail.com', password: 'testing' })
    userActions.signIn({ email: 'adUser.testing@gmail.com', password: 'testing' })
  });

  it('Creating dummy ad with valid information', () => {

    var ad = {
      title: 'Tesla',
      location: 'Montreal',
      imageUrl: 'C:/loadpicture.jpg',
      description: 'This is my new car',
      date: '2017/10/25',
      keyCategory: 'Vehicles'
    }
    adActions.createAd(ad)
    .then(ad => {
      expect(ad.key).to.be.not.null
    })
  })

  it('Removing dummy ad using title', () => {
    adActions.removeAd({ title: 'lancer' })
  })

  after(function() {
    userActions.signIn({ email: 'mocha.testing@gmail.com', password: 'abcDEF1@' })
    .then(firebaseUser => {
      userActions.deleteUser(firebaseUser)
    })
    process.exit()
  });

})
