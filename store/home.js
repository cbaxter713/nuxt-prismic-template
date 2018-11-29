export const state = () => ({
  homeDoc: null,
  headerLinks: null,
  footerLinks: null
})

export const getters = {
  homeDoc: state => {
    return state.homeDoc
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
    state.homeDoc = obj
  },
  SET_HEADER_LINKS (state, obj) {
    state.headerLinks = obj
  },
  SET_FOOTER_LINKS (state, obj) {
    state.footerLinks = obj
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
  async getNav ({getters, commit}) {
    if (getters.headerLinks) {
      return getters.headerLinks
    } else {
      const navData = await this.$prismic.api.getByUID('nav_menu', 'main-nav');
      commit('SET_HEADER_LINKS', navData)
      return navData
    }
  },
  async getFooterNav ({getters, commit}) {
    if (getters.footerLinks) {
      return getters.footerLinks
    } else {
      const navData = await this.$prismic.api.getByUID('nav_menu', 'footer-nav');
      commit('SET_FOOTER_LINKS', navData)
      return navData
    }
  }
}
