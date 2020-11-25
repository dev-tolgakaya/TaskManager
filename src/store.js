import Vue from "vue";
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        homepagetopics: [
            {
                name: "Tolga KAYA",
                date: "24 Kasım",
                title: "Yeni projenin planlanması",
                id: 1
            },
            {
                name: "Merve BÜLBÜL",
                date: "01 Aralık",
                title: "Vue.js çalışması",
                id: 2
            },
            {
                name: "Doruk GÜNDOĞDU",
                date: "8 Aralık",
                title: "Projenin sunumu",
                id: 3
            }

        ],
        registered: false,
        users: [
            {
                email: "dvp.tolgakaya@gmail.com",
                password: "tolga569"
            },           
            {
                email: "mervebulbul@gmail.com",
                password: "corona2020"
            }
        ]

    },

    getters: {},

    mutations: {
        ADD_TOPIC(state, newTopic) {
            state.homepagetopics.push(newTopic)
        },
        CHECK_INFOS(state, userInfos) {
            state.users.map(user => {
                if (user.email === userInfos.email && user.password === userInfos.password) {
                    state.registered = true
                }
            })
        },
        CHANGE_REGISTER_STATE(state) {
            state.registered = false;
        },
        ADD_NEW_USER(state, newUser) {
            state.users.push(newUser)
        }
    },

    actions: {
        addNewTopic({ commit }, newTopic) {
            commit('ADD_TOPIC', newTopic)
        },
        checkInfos({ commit }, userInfos) {
            commit('CHECK_INFOS', userInfos)
        },
        changeRegisterState({ commit }) {
            commit('CHANGE_REGISTER_STATE')
        },
        addNewUser({ commit }, newUser) {
            commit('ADD_NEW_USER', newUser)
        }
    }
});