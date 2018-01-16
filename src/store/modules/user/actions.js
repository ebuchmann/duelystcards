import * as types from 'store/mutation-types';
import { api } from 'base/api-config';

import mixpanel from 'mixpanel-browser';

module.exports = {
  login: async ({ commit }, payload) => {
    try {
      const { data } = await api.post('/login', payload);
      mixpanel.track('User login');
      if (data.user) {
        commit(types.SET_USER, data.user);
      }
    } catch (error) {
      throw new Error('Login failed.');
    }
  },

  logout: async ({ commit }) => {
    await api.get('/logout');
    commit(types.SET_USER, null);
  },

  createAccount: async ({ commit }, payload) => {
    try {
      await api.post('/users/new', payload);
      mixpanel.track('Account created');
    } catch (error) {
      throw new Error('There was an error with the username or password.');
    }
  },

  resetApiKey: async ({ commit }) => {
    try {
      const { data } = await api.post('/users/reset-api-key');
      commit(types.SET_API_KEY, data);
    } catch (error) {
      throw new Error(error);
    }
  }
};
