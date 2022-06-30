const initialState = {
  currentResultPage: 0,
  searchKeywords: "",
  searchResults: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SEARCH_KEYWORDS":
      return { ...state, searchKeywords: action.payload };
    case "SET_SEARCH_RESULTS":
      return { ...state, searchResults: action.payload || [] };
    case "ADD_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: [...state.searchResults, ...action.payload] || [],
        currentResultPage: state.currentResultPage + 1,
      };
    default:
      return state;
  }
}

export default rootReducer;
