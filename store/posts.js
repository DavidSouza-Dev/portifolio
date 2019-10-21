export const state = () => ({
    wp_data: null,
    posts: null,
    search: null,
    postsPaginated: [],
    page: 1,
})

export const getters = {
    GET_WPDATA: state => {
      return state.wp_data ?
        state.wp_data :
        null
    },
    GET_POSTS: state => {
      return state.posts ?
        state.posts :
        null
    },
    GET_SEARCH: state => {
      return state.search ?
        state.search :
        null
    },
    GET_POSTS_PAGINATED: state => {
      return state.postsPaginated ?
        state.postsPaginated :
        null
    },
    GET_PAGE: state => {
      return state.page ?
        state.page :
        null
    },
}

export const mutations = {
    SAVE_POSTS: (state, payload) => {
      state[payload.target] = payload.value
    },
    SAVE_POSTS_PAGINATED: (state, payload) => {
      state.postsPaginated = {...state.postsPaginated, [payload.target]: payload.value }
    }
}

export const actions = {
    async POST_POSTS({ commit }, payload) {
      commit('SAVE_POSTS', { target: payload.target, value: payload.value })
    },
    async POST_POSTS_PAGINATED({ commit }, payload) {
      commit('SAVE_POSTS_PAGINATED', { target: payload.target, value: payload.value })
    }
}