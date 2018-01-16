module.exports = {
  searchText: state => state.textSearch,

  hasActiveFilters: state =>
    state.typeSelect.length ||
    state.raritySelect.length ||
    state.factionSelect.length ||
    state.manaSelect.length ||
    state.tribeSelect.length
};
