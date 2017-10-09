export const mutations = {
  setUser (state, payload) {
    state.user = payload
  },
  setError (state, payload) {
    state.error = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  setAdList (state, payload) {
    state.adList = payload
  },
  setCategoryList (state, payload) {
    state.categoryList = payload
  },
  setCategory (state, payload) {
    state.category = payload
  }
}
