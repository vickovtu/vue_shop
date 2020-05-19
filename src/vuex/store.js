import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

import actions from './actions/actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'


let store = new Vuex.Store(
    {
        state: {
            products: [],
            cart: [],
        },
        mutations,
        actions,
        getters,

    }
);
export default store;