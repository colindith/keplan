import Vue from 'vue'
import Vuex from 'vuex'

import {state, mutations} from '@/stores/SnackBar'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  // getSnack,
  strict: true,
})