import firebase from 'firebase'
import { firebaseConfig } from '../../src/config'
const chai = require('chai')



const expect = chai.expect
const assert = chai.assert


describe('This unit test is for demo.', () => {
  it('is true', () => {
    expect(true).to.equal(true)
  })
})

describe('signInWithEmailAndPassword.', () => {
  it('is true', () => {
  //  const actions = require('../../src/store/actions')
  firebase.initializeApp(firebaseConfig)
  firebase.auth().signInWithEmailAndPassword('ruthvikshandilya19@gmail.com', 'abc12345')
  .then(firebaseUser => {
    console.log(firebaseUser.email)
    assert.equal(firebaseUser.email,'ruthvikshandilya19@gmail.com','Email is equal to')
  })
  .catch(error => {
    //expect(true).to.equal(true)
    console.log('failed')
  })
  })
})
