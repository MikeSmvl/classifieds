import {userActions} from '../../src/store/actions.user'
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

const expect = chai.expect
const assert = chai.assert
const should = chai.should
/*
describe('Validating signup operation (valid email and password).', () => {
  it('is true', () => {
    expect(true).to.equal(false)
  })
})
*/

describe('Validating signup operation (valid email and password).', () => {
  it('is true 2', () => {
    var promiseObj = userActions.signUp({ email: 'mocha.testing2@hotmail.com', password: 'testing' })
    expect(promiseObj).should.eventually.equal('mocha.testing2@hotmail.com')
  })
})

/*
describe('Validating signup operation (valid email and password).', () => {
  it('is true 1', () => {
    userActions.signUp({ email: 'mocha.testing2@hotmail.com', password: 'testing' })
    .then(firebaseUser => {
      console.log(firebaseUser.email);
      expect(true).to.eventually.equal(true)
    })
    .catch(error => {
      console.log(error.message);
      expect(true).to.eventually.equal(false)
    })
  })
})
*/
