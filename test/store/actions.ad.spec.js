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
/*
describe('Ad component', () => {

  it('Creating dummy ad with valid information', () => {
    userActions.signIn({ email: 'ruthvikshandilya19@gmail.com', password: 'abcDEF1@' })
    .then((firebaseUser) => {
      const result = adActions.createAd({
      title: 'lancer',
      location: 'Montreal',
      imageUrl: 'C:/loadpicture.jpg',
      description: 'This is my new car',
      date: '2017/10/25',
      keyCategory: 'Vehicles'
    })
    // .then(o => {
    //   expect(o.key).to.not.be.null
    //   console.log(o);
    //   done()
    // })
    // console.log(result);
    // done()
})
  })

  it('Removing dummy ad using title', () => {
    adActions.removeAd({ title: 'lancer' })
  })
})
*/
