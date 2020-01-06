import Vue from "nativescript-vue";

import App from "./components/App";
require('nativescript-vue').registerElement('RadCalendar', () => require('nativescript-ui-calendar').RadCalendar);

import RadListView from "nativescript-ui-listview/vue";

import store from './store'

Vue.use(RadListView);

new Vue({
    render: h => h(App),
    store,
}).$start();
