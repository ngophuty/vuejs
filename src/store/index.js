import { createStore } from 'vuex'
import count from './module/count.js'

const store = createStore({
  modules:{
    count
  }
  })


export default store