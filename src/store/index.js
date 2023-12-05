import { createStore } from 'vuex'
import { VuexPersistence } from 'vuex-persist'

const vuexPersist = new VuexPersistence({
  storage: localStorage
})

export default createStore({
  state: {
    point: 500, // 初期ポイント
    count: 0, // indexの管理
    items: [] // dataを保存
  },
  getters: {
    getCount: (state) => {
      return state.items.length
    },
    getAll: (state) => {
      return state.items
    },
    getMemoById: (state) => (id) => {
      return state.items.find(item => item.id === id)
    }
  },
  mutations: {
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
    /* メモを保存する */
    save (state, newitem) {
      newitem.id = ++state.count
      state.items.unshift(newitem)
    },
    delete (state, id) {
      const numericId = parseInt(id, 10);
      console.log(numericId);
      state.items = state.items.filter(item => item.id !== numericId);
    }
  },
  actions: {
    deleteItem({ commit }, productId) {
      commit('delete', productId);
    },
  },
  modules: {
  },
  plugins: [vuexPersist.plugin]
})
