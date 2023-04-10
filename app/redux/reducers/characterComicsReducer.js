import {
  GET_CHARACTER_COMICS_REQUEST,
  GET_CHARACTER_COMICS_SUCCESS,
  GET_CHARACTER_COMICS_ERROR,
} from '../actions/characterActions';

const initialState = {
  loading: false,
  comics: null,
  error: null,
};

export const characterComicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER_COMICS_REQUEST:
      return {...state, loading: true};
    case GET_CHARACTER_COMICS_SUCCESS:
      return {
        ...state,
        loading: false,
        comics: action.payload.comics,
        error: null,
      };
    case GET_CHARACTER_COMICS_ERROR:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};
