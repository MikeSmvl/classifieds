import firebase from 'firebase'
import {adActions} from '../../src/store/actions.ad'
import {userActions} from '../../src/store/actions.user'
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
  it('Creating ad with valid information', (done) => {
    userActions.signIn({ email: 'mocha.testing2@hotmail.com', password: 'testing' })
    .then(firebaseUser => {
      adActions.createAd({
      title: 'Tesla',
      location: 'Montreal',
      imageUrl: 'C:/loadpicture.jpg',
      description: 'This is my new car',
      date: '2017/10/25',
      keyCategory: 'Vehicles'
    })
    .then(o => {
      expect(o.key).to.be.not.null
      done()
    })
    .catch((error) => {
      console.log(error)
    })
  })
  })
/*
  it('Retrieve all ads', (done) => {
    var x
    adActions.findAll(x)
    console.log(x);
    //expect(adList).to.not.be.empty
  })
*/
/*
  it('Deleting ad with valid information', (done) => {
    userActions.signIn({ email: 'ruthvikshandilya19@gmail.com', password: 'abc12345' })
    .then(firebaseUser => {
    adActions.createAd({
      title: 'swift',
      location: 'Montreal',
      imageUrl: 'C:/loadpicture.jpg',
      description: 'This is my present car',
      date: '2017/10/25',
      keyCategory: 'Vehicles'
    })
    .then(o => {
      adActions.removeAd(o)
      .then(oi => {
        expect(oi).to.be.empty
        done()
      })
    })
    .catch((error) => {
      console.log(error)
    })
  })
*/
})
