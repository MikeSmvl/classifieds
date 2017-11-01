import {getters} from '../../src/store/getters'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

const expect = chai.expect
const assert = chai.assert


describe('getters component', () => {

  it('Retrive appTitle', ()=> {
    const state = {
      appTitle: "Hello"
    }
    expect(getters.appTitle(state)).to.equal("Hello")
  })

  it('Retrive users', () => {
    const state = {
      user : {
        username: "richard",
        uid: "abcd"
      }
    }
    expect(getters.getUser(state)).to.equal(state.user)
  })

  it('Retrive searchList', ()=> {
    const state = {
      searchList : ['car', 'bike']
    }
    expect(getters.getSearchList(state)[0]).to.equal('car')
  })

  it('Retrive loading', () => {
    const state = {
      loading : true
    }
    expect(getters.getLoading(state)).to.equal(true)
  })

})
