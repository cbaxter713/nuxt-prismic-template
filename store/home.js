export const state = () => ({
  doc: null,
  headerLinks: null,
  footerLinks: null
})

export const getters = {
  doc: state => {
    return state.doc
  },
  headerLinks: state => {
    return state.headerLinks
  },
  footerLinks: state => {
    return state.footerLinks
  }
}


export const mutations = {
  SET_HOME_PAGE (state, obj) {
    state.doc = obj
  },
  SET_HEADER_LINKS (state, obj) {
    state.headerLinks = obj
  },
  SET_FOOTER_LINKS (state, obj) {
    state.footerLinks = obj
  }
}


export const actions = {
  async getHomePage ({commit, dispatch}) {
    let ctx = await dispatch('setCtx', null, {root: true})
    const homeDoc = ctx.api.getSingle('home_page')
    commit('SET_HOME_PAGE', homeDoc)
    return homeDoc
  },
  async getNav ({commit, dispatch}) {
    let ctx = await dispatch('setCtx', null, {root: true});
    const navData = ctx.api.getByUID('nav_menu', 'main-nav');
    return navData
  },
  async getFooterNav ({commit, dispatch}) {
    let ctx = await dispatch('setCtx', null, {root: true});
    const navData = ctx.api.getByUID('nav_menu', 'footer-nav');
    return navData
  }
}
