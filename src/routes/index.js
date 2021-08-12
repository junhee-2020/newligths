import Vue from 'vue';
import VueRouter from 'vue-router';
import FreeBoardView from '../views/FreeBoardView.vue';
import HomeView from '../views/HomeView.vue';
import NewLightNewsView from '../views/NewLightNewsView.vue';
import PictureView from '../views/PictureView.vue';
import WayToComeView from '../views/WayToComeView.vue';
import WorshipGuideView from '../views/WorshipGuideView.vue';
import MenuBar from '../components/MenuBar.vue';
import AboutChurchView from '../views/AboutChurchView.vue';
import IframeCompView from '../components/IframeComp.vue';

Vue.use(VueRouter);

export const router = new VueRouter({    
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/FreeBoardView',
            component: FreeBoardView,
        },
        {
            path: '/HomeView',
            component: HomeView,
        },
        {
            path: '/NewLightNewsView',
            component: NewLightNewsView,
        },
        {
            path: '/PictureView',
            component: PictureView,
        },
        {
            path: '/WayToComeView',
            component: WayToComeView,
        },
        {
            path: '/WorshipGuideView',
            component: WorshipGuideView,
        },
        {
            path: '/MenuBar',
            component: MenuBar,
        },      
        {
            path: '/AboutChurchView',
            component: AboutChurchView,
        },
        {
            path: '/IframeCompView/:src',
            component: IframeCompView,
        }
    ]
})