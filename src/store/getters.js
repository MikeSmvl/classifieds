export const getters = {
  appTitle (state) {
    return state.appTitle
  },
  getUser (state) {
    return state.user
  },
  getError (state) {
    return state.error
  },
  getLoading (state) {
    return state.loading
  },
  getAdList (state) {
    return state.adList
  },
  getCategoryList (state) {
    return state.categoryList
  },
  getSubCategoryList (state) {
    return state.subCategoryList
  },
  getSearchList (state) {
    return state.searchList
  }
}
