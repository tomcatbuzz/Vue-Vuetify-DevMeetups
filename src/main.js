import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken2, // #E53935
    accent: colors.red.accent2,
    secondary: colors.red.lighten4, // #FFCDD2
    info: colors.blue.lighten1,
    warning: colors.amber.darken2,
    error: colors.red.accent4,
    success: colors.green.lighten2
  }
})

Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyC6I8Z57iW99Beu6T9uhlwmhcmakZnXlc0',
      authDomain: 'vue-devmeetups.firebaseapp.com',
      databaseURL: 'https://vue-devmeetups.firebaseio.com',
      projectId: 'vue-devmeetups',
      storageBucket: 'vue-devmeetups.appspot.com'
    })
  }
})
