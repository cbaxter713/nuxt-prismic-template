import PrismicConfig from '../prismic-configuration';

export const state = () => ({
  ctx: null
})

export const getters = {
  ctx: state => {
    return state.ctx
  }
}

export const mutations = {
  SET_CTX (state, ctx) {
    state.ctx = ctx
  }
}

export const actions = {
  async setCtx ({commit}) {
    let ctx = await this.$prismic.initApi()
    return ctx
  },
  async setupPreview ({dispatch}, payload) {
    let ctx = await dispatch('setCtx');
    ctx.api.previewSession(payload, ctx.linkResolver, '/').then((url) => {
      window.location.replace(url);
    });
  }
  // async nuxtServerInit ({dispatch}) {
  //   await dispatch('admin/getAdminSettings')
  // }
}
