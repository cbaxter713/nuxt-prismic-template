export const state = () => ({
  headerLinks: null,
  footerLinks: null
})

export const getters = {
  headerLinks: state => {
    return state.headerLinks
  },
  footerLinks: state => {
    return state.footerLinks
  }
}


export const mutations = {
  SET_HEADER_LINKS (state, obj) {
    state.headerLinks = obj
  },
  SET_FOOTER_LINKS (state, obj) {
    state.footerLinks = obj
  }
}


export const actions = {
  async getMainNav ({getters, commit}) {
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
  },
  async getFullDecoratorNav ({getters, commit, dispatch}) {
    const headerNavData = await dispatch('getMainNav');
    const footerNavData = await dispatch('getFooterNav');

    return {
      headerNav: headerNavData,
      footerNav: footerNavData
    }
  }
}
