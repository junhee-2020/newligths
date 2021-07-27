import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';
Vue.use(Vuex);
 
export const store = new Vuex.Store({    
    state: {
        worshipGuideList: [],
        wayToComeList: [],
        aboutChurchList: []
    },
    getters: {
        fetchedWorshipGuideList(state) {
            return state.worshipGuideList;
        },
        fetchedWayToComeList(state) {
            return state.wayToComeList;
        },
        fetchAboutChurchList(state) {
            return state.aboutChurchList;
        }
    },
    mutations,
    actions
});