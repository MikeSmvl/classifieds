import {getters} from '../../src/store/getters'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

const expect = chai.expect
const assert = chai.assert


describe('Getters component', () => {

  it('Retrieve appTitle', ()=> {
    const state = {
      appTitle: "Hello"
    }
    expect(getters.appTitle(state)).to.equal("Hello")
  })

  it('Retrieve getUser', () => {
    const state = {
      user : {
        username: "richard",
        uid: "abcd"
      }
    }
    expect(getters.getUser(state)).to.equal(state.user)
  })

  it('Retrieve getError', ()=> {
    const state = {
      error : ['err1', 'err2']
    }
    expect(getters.getError(state)[0]).to.equal('err1')
  })

  it('Retrieve getSearchList', ()=> {
    const state = {
      searchList : ['car', 'bike']
    }
    expect(getters.getSearchList(state)[0]).to.equal('car')
  })

  it('Retrieve getAdList', ()=> {
    const state = {
      adList : ['ad1', 'ad2']
    }
    expect(getters.getAdList(state)[0]).to.equal('ad1')
  })

  it('Retrieve getCategoryList', ()=> {
    const state = {
      categoryList : ['cat1', 'cat2']
    }
    expect(getters.getCategoryList(state)[0]).to.equal('cat1')
  })

  it('Retrieve getSubCategoryList', ()=> {
    const state = {
      subCategoryList : ['subCat1', 'subCat2']
    }
    expect(getters.getSubCategoryList(state)[0]).to.equal('subCat1')
  })

  it('Retrieve getLoading', () => {
    const state = {
      loading : true
    }
    expect(getters.getLoading(state)).to.equal(true)
  })

})
