import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
  actions: {
    signIn({ commit }, user) {
      commit('setUser', user);
    },
    login({ state }, credentials) {
      const storedUser = state.user; 
      if (storedUser && storedUser.name === credentials.name && storedUser.password === credentials.password) {
        return true; 
      }
      return false; 
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
  },
});

export default store;
