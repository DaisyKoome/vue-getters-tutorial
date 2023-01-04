import { createApp   } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
  state() {
    return {
      counter: 0
    }
  },
  getters: {
    getCounter(state) { return state.counter }
  },
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload
    }
  },
  actions: {
    increment(context, payload) {
      context.commit('increment', payload);
    }
  }
})

const app = createApp(App)

app.use(store)
app.mount('#app')