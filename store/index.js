import PrismicConfig from '../prismic-configuration';

export const state = () => ({
  ctx: null,
  previewUrl: null
})

export const getters = {
  ctx: state => {
    return state.ctx
  },
  previewUrl: state => {
    return state.previewUrl
  }
}

export const mutations = {
  SET_CTX (state, ctx) {
    state.ctx = ctx
  },
  SET_PREVIEW_URL (state, url) {
    state.previewUrl = url
  }
}

export const actions = {
  async setCtx ({commit}) {
    let ctx = await this.$prismic.initApi()
    return ctx
  },
  async setupPreview ({commit}, payload) {
    let previewUrl = await this.$prismic.setupPreview(payload);

    console.log('state setup preview url is: ', url);

    if (previewUrl) {
      commit('SET_PREVIEW_URL', previewUrl)
    }
  }
  // async nuxtServerInit ({dispatch}) {
  //   await dispatch('admin/getAdminSettings')
  // }
}
