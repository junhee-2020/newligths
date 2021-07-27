export default {
    SET_WORSHIP_GUIDE_CONTENT(state, content) {        
        state.worshipGuideList = content;                        
    },
    SET_WAY_TO_COME_CONTENT(state, content) {
        state.wayToComeList = content;
    },
    SET_ABOUT_CHURCH_CONTENT(state, content) {
        state.aboutChurchList = content;
    }
}