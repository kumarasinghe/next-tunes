const initialState = {
  searchResults: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return { searchResults: action.payload || [] };
    default:
      return state;
  }
}

export default rootReducer;
