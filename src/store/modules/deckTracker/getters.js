module.exports = {
  canEditDeck: (state, getters, rootState) => {
    if (rootState.user.user && state.currentDeck) return (rootState.user.user._id === state.currentDeck.user_id);
    return false;
  },
};
