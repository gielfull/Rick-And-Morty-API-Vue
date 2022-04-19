import axios from "axios"
import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate"

export const charactersStore = createStore({
    state: {
        characters: [],
        character: {},
        loading: false,
        error: null,
        showModal: false,
        currentPage: null,
        currentGender: null
    },
    mutations: {
        setCharacters(state, characters) {
            state.characters = characters
        },
        setCharacter(state, character) {
            state.character = character
        },
        setLoading(state, loading) {
            state.loading = loading
        },
        setError(state, error) {
            state.error = error
        },
        showModal(state, status) {
            state.showModal = status
        },
        setCurrentPage(state, page) {
            state.currentPage = page
        },
        setCurrentGender(state, gender) {
            state.currentGender = gender
        }
    },
    actions: {
        getCharacters({ commit }) {
            commit("setLoading", true)
            commit("setError", null)
            axios
                .get("https://rickandmortyapi.com/api/character/")
                .then((response) => response.data)
                .then((data) => {
                    commit("setCharacters", data)
                    commit("setLoading", false)
                })
                .catch((error) => {
                    commit("setError", error)
                    commit("setLoading", false)
                })
        },
        getNextCharacters({ commit }, url) {
            commit("setLoading", true)
            commit("setError", null)
            axios
                .get(url)
                .then((response) => response.data)
                .then((data) => {
                    commit("setCharacters", data)
                    commit("setLoading", false)
                })
                .catch((error) => {
                    commit("setError", error)
                    commit("setLoading", false)
                })
        },
        goToCharactersPage({ commit }, page) {
            commit("setLoading", true)
            commit("setError", null)
            axios
                .get("https://rickandmortyapi.com/api/character/?page=" + page)
                .then((response) => response.data)
                .then((data) => {
                    commit("setCharacters", data)
                    commit("setLoading", false)
                })
                .catch((error) => {
                    commit("setError", error)
                    commit("setLoading", false)
                })
        },
        getCharacter({ commit }, id) {
            commit("setLoading", true)
            commit("setError", null)
            axios
                .get(`https://rickandmortyapi.com/api/character/${id}`)
                .then((response) => response.data)
                .then((data) => {
                    commit("setCharacter", data)
                    commit("setLoading", false)
                })
                .catch((error) => {
                    commit("setError", error)
                    commit("setLoading", false)
                })
        },
        getCharactersByGender({ commit }, gender) {
            axios
                .get(`https://rickandmortyapi.com/api/character/?gender=${gender}`)
                .then((response) => response.data)
                .then((data) => {
                    commit("setCharacters", data)
                    commit("setLoading", false)
                })
                .catch((error) => {
                    commit("setError", error)
                    commit("setLoading", false)
                })
        },
        getCharacterByName({ commit }, name) {
            axios
                .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
                .then((response) => response.data)
                .then((data) => {
                    commit("setCharacters", data)
                    commit("setLoading", false)
                })
                .catch((error) => {
                    commit("setError", error)
                    commit("setLoading", false)
                })
        },
        showModal({ commit }, status) {
            commit("showModal", status)
        },
        setCurrentGender({ commit }, gender) {
            commit("setCurrentGender", gender)
        },
        setCurrentPage({ commit }, page) {
            commit("setCurrentPage", page)
        }
    },
    getters: {
        characters(state) {
            return state.characters
        },
        character(state) {
            return state.character
        },
        loading(state) {
            return state.loading
        },
        error(state) {
            return state.error
        },
        getShowModal(state) {
            return state.showModal
        }
    },
    plugins: [createPersistedState()]
})
