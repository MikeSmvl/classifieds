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

var importComponentSpec = ((name, path) => {
  describe(name, () => {
    require(path);
  })
})

describe('Test suite', () => {

  before(function() {
    console.log('Init preparing for test suites.');
  });

  importComponentSpec('Running Category Component...', './actions.category.spec.js')
  importComponentSpec('Running User Component...', './actions.user.spec.js')
  importComponentSpec('Running Getters Component...', './actions.getters.spec.js')
  importComponentSpec('Running Ad Component...', './actions.ad.spec.js')

  after(function() {
    console.log('Flush after completion.');
    process.exit()
  });

})
