import {categoryActions} from '../../src/store/actions.category'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

const expect = chai.expect
const assert = chai.assert

describe('Category component', () => {

  it('Retrieving list of categories, expecting a fixed no. of categories', (done) => {
    var listCategories = categoryActions.getList()
    expect(listCategories.length).to.equal(8)
    done()
  })

  it('Retrieving list of subcategories for a given category, expecting a fixed no. of subcategory', (done) => {
    var listSubCategories = categoryActions.getSubCategory({ keyCategory: 'Community' })
    expect(listSubCategories.length).to.equal(6)
    done()
  })

  it('No subcategory is returned if an empty category is passed as argument', (done) => {
    var listSubCategories = categoryActions.getSubCategory({ keyCategory: ' ' })
    expect(listSubCategories.length).to.equal(0)
    done()
  })

  it('No subcategory is returned if an invalid category is passed as argument', (done) => {
    var listSubCategories = categoryActions.getSubCategory({ keyCategory: 'Dummy category' })
    expect(listSubCategories.length).to.equal(0)
    done()
  })

})
