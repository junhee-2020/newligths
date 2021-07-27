import { fetchWorshipGuideContent, fetchWayToComeContent,  fetchAboutChurchContent} from '../api/index.js';

export default {
    FETCH_WORSHIP_GUIDE_CONTENT({commit}) {
        return fetchWorshipGuideContent
        .then(res => {                
            commit('SET_WORSHIP_GUIDE_CONTENT', res);
        })
        .catch(err => {
            console.error(err);
        });
    },
    FETCH_WAY_TO_COME_CONTENT({commit}) {
        return fetchWayToComeContent
        .then(res => {                
            commit('SET_WAY_TO_COME_CONTENT', res);
        })
        .catch(err => {
            console.error(err);
        });
    },
    FETCH_ABOUT_CURCH_CONTENT({commit}) {
        return fetchAboutChurchContent
        .then(res => {                
            commit('SET_ABOUT_CHURCH_CONTENT', res);
        })
        .catch(err => {
            console.error(err);
        });
    },
}