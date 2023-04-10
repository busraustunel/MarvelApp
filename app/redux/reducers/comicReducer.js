
const initialState = {
  comics: [],
  isLoading: false,
  error: null,
};

export const comicReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COMICS_REQUEST':
      return {...state, isLoading: true};
    case 'GET_COMICS_SUCCESS':
      return {...state, isLoading: false, comics: action.payload};
    case 'GET_COMICS_FAILURE':
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;

  }
};
