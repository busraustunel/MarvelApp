import {
  GET_CREATORS_BY_COMIC_REQUEST,
  GET_CREATORS_BY_COMIC_SUCCESS,
  GET_CREATORS_BY_COMIC_ERROR,
} from '../actions/comicActions';

const initialState = {
  creators: [],
  loading: false,
  error: null,
};

export const creatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CREATORS_BY_COMIC_REQUEST:
      return {...state, loading: true};
    case GET_CREATORS_BY_COMIC_SUCCESS:
      return {
        ...state,
        loading: false,
        comics: action.payload.comics,
        error: null,
      };
    case GET_CREATORS_BY_COMIC_ERROR:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};
