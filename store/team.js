export const state = () => ({
  doc: null,
  pageIndex: null,
  resultsPerPage: 8,
  resultsSize: null,
  totalResults: null,
  totalPages: null,
  nextPage: null,
  previousPage: null,
  posts: []
})

export const getters = {
  doc: state => {
    return state.doc
  },
  pageIndex: state => {
    return state.page
  },
  resultsSize: state => {
    return state.resultsSize
  },
  totalResults: state => {
    return state.totalResults
  },
  totalPages: state => {
    return state.totalPages
  },
  nextPage: state => {
    return state.nextPage
  },
  previousPage: state => {
    return state.previousPage
  },
  posts: state => {
    return state.posts
  }
}


export const mutations = {
  SET_TEAM_MEMBER (state, obj) {
    state.doc = obj
    state.pageIndex = obj.page
    state.resultsSize = obj.results_size
    state.totalResults = obj.total_result_size
    state.totalPages = obj.total_pages
    state.nextPage = obj.next_page
    state.previousPage = obj.prev_page

    state.posts = [...obj.results, ...state.posts]
  }
}


export const actions = {
  async getTeam ({dispatch}) {
    let ctx = await dispatch('setCtx', null, {root: true})
    return ctx.api.getSingle('team_page', {fetchLinks: ['team_member.name', 'team_member.image', 'team_member.position']})
  },
  async getTeamMember ({commit, dispatch}, uid) {
    let ctx = await dispatch('setCtx', null, {root: true})
    return ctx.api.getByUID('team_member', uid)
  }
}
