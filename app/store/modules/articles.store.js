import axios from 'axios';

const HOST_URL='http://localhost:8000'

const state = {
    articles: [],
}

const getters = {
    getArticles(state) {
        return state.articles;
    }
}

const actions = {
    fetchArticles({ commit }) {
        return new Promise((resolve, reject) => {
            axios.get(`${HOST_URL}/api/1.0/articles/`).then(response => {
                commit('SET_ARTICLES', response.data.results);
                resolve();
            }).catch(error => {
                reject();
            });
        });
    },
}

const mutations = {
    SET_ARTICLES(state, data) {
        state.articles = data;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}