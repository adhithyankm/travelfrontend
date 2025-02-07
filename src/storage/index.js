import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    contactForm:{
      name:'',
      email:'',
      message:'',
    }
  },
  mutations: {
    setUser(state, user) {
      console.log(setUser,'hello');
      
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    setContactForm(state, payload) {
      state.contactForm.name = payload.name;
      state.contactForm.email = payload.email
      state.contactForm.message = payload.message
    }
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
    updateContactForm({ commit }, payload) {
      commit('setContactForm', payload);
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
    getContactForm(state) {
      return state.contactForm;
    },
  },
});

export default store;
