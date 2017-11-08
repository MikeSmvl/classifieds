const categoryJsonObject = require('../category.response.json')

export const categoryActions = {
  getList () {
    return categoryJsonObject
  },
  getSubCategory (payload) {
    var keyCategory = payload.keyCategory
    var subCategoryList = ''
    for (var i = 0; i < categoryJsonObject.length; i++) {
      var c = categoryJsonObject[i].key
      if (c === keyCategory) {
        if (categoryJsonObject[i].subCategories !== undefined) {
          subCategoryList = categoryJsonObject[i].subCategories
        }
      }
    }
    return subCategoryList
  }
}
