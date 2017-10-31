import firebase from 'firebase'
import {userActions} from '../../src/store/actions.user'
import { firebaseConfig } from '../../src/config'

firebase.initializeApp(firebaseConfig)

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

const expect = chai.expect
const assert = chai.assert

describe('User component', () => {

  it('SignUp user with valid email and valid password', (done) => {
    userActions.signUp({ email: 'mocha.testing@gmail.com', password: 'testing' })
    .then(firebaseUser => {
      expect(firebaseUser.email).to.equal('mocha.testing@gmail.com')
      done()
    })
  })

  it('SignIn user with valid email and valid password', (done) => {
    userActions.signIn({ email: 'mocha.testing@gmail.com', password: 'testing' })
    .then(firebaseUser => {
      expect(firebaseUser.email).to.equal('mocha.testing@gmail.com')
      done()
    })
  })

  it('SignOut previously authenticated user', (done) => {
    userActions.signOut()
    .then(firebaseUser => {
      expect(firebaseUser).to.be.undefined
      done()
    })
  })

  it('Deleting dummy user account', (done) => {
    userActions.signIn({ email: 'mocha.testing@gmail.com', password: 'testing' })
    .then(firebaseUser => {
      userActions.deleteUser(firebaseUser)
      .then(o => {
        expect(o).to.be.undefined
        done()
      })
    })
  })

})
