const initialState = {
  characters: [],
  isLoading: false,
  error: null,
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CHARACTERS_REQUEST':
      return {...state, isLoading: true};
    case 'GET_CHARACTERS_SUCCESS':
      return {...state, isLoading: false, characters: action.payload};
    case 'GET_CHARACTERS_FAILURE':
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
};
