import firebase from 'firebase'
import { adActions } from '../../src/store/actions.ad'
import { userActions } from '../../src/store/actions.user'
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

  before(function(done) {
    userActions.signUp({ email: 'aduser.testing@gmail.com', password: 'abcDEF1@' })
    .then(o => { done() })
  });

  it('Creating dummy ad with valid information', (done) => {
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
      done()
    })
  })

  it('Removing dummy ad using title', (done) => {
    adActions.removeAd({ title: 'Tesla' })
    .then(o => {
      done()
    })
  })

  it('Number of ads retrieved.', (done) => {
    adActions.findAll((retrievedList) => {
      expect(retrievedList.length).to.be.above(0)
      done()
    })
  })


  it('Retrieving details of all ads', (done) => {
    adActions.findAll((retrievedList) => {
      if(retrievedList.length > 0) {
        for (let ad of retrievedList) {
          expect(ad.key).to.be.not.null
        }
      }
      done()
    })
  })

  after(function(done) {
    userActions.deleteUser(firebase.auth().currentUser)
    .then(o => {
      done()
    })
  });

})
