export const state = () => ({
  teamDoc: null,
  teamMembers: []
})

export const getters = {
  teamDoc: state => {
    return state.teamDoc
  },
  teamMembers: state => {
    return state.teamMembers
  },
  teamMemberById: (state) => (uid) => {
    return state.teamMembers[uid]
  }
}

export const mutations = {
  SET_TEAM_DOC (state, doc) {
    state.teamDoc = doc
  },
  SET_TEAM_MEMBER (state, memberData) {
    state.teamMembers[memberData.uid] = memberData.doc
  }
}

export const actions = {
  async getTeam ({getters, commit}) {
    if (getters.teamDoc) {
      return getters.teamDoc
    } else {
      const teamDoc = await this.$prismic.api.getSingle('team_page', {fetchLinks: ['team_member.name', 'team_member.image', 'team_member.position']})
      commit('SET_TEAM_DOC', teamDoc)
      return teamDoc
    }
  },
  async getTeamMemberByUid ({getters, commit}, uid) {
    if (getters.teamMemberById(uid)) {
      return getters.teamMemberById(uid)
    } else {
      const teamMemberDoc = await this.$prismic.api.getByUID('team_member', uid)
      const memberData = {
        uid: uid,
        doc: teamMemberDoc
      }
      commit('SET_TEAM_MEMBER', memberData)
      return teamMemberDoc
    }
  }
}
