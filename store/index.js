export const state = () => ({
  homeDoc: null
})

export const getters = {
  homeDoc: state => {
    return state.homeDoc
  }
}

export const mutations = {
  SET_HOME_PAGE (state, obj) {
    state.homeDoc = obj
  }
}

export const actions = {
  async getHomePage ({getters, commit}) {
    if (getters.homeDoc) {
      return getters.homeDoc
    } else {
      const homeDoc = await this.$prismic.api.getSingle('home_page')
      commit('SET_HOME_PAGE', homeDoc)
      return homeDoc
    }
  },
  async nuxtServerInit ({dispatch}) {
    await dispatch('navigation/getFullDecoratorNav')
  }
}
