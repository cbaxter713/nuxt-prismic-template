export const state = () => ({
  docs: {}
})

export const getters = {
  contentDocs: state => {
    return state.docs
  },
  contentDocByUID: (state) => (uid) => {
    return state.docs[uid]
  }
}

export const mutations = {
  SET_CONTENT_DOC (state, contentData) {
    state.docs[contentData.uid] = contentData.doc
  }
}

export const actions = {
  async getContentDocByUID ({getters, commit}, uid) {
    const exisitingDoc = getters.contentDocByUID(uid);

    if (exisitingDoc) {
      return exisitingDoc
    } else {
      const contentDoc = await this.$prismic.api.getByUID('content_page', uid);
      const contentData = {
        uid: uid,
        doc: contentDoc
      }
      commit('SET_CONTENT_DOC', contentData)
      return contentDoc
    }
  }
}
