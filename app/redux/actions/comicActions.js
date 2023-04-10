import {MARVEL_API_PUBLIC_KEY, MARVEL_API_PRIVATE_KEY} from '../config';
import md5 from 'md5';
export const getComics = () => {
  const timestamp = new Date().getTime();
  const hash = md5(
    `${timestamp}${MARVEL_API_PRIVATE_KEY}${MARVEL_API_PUBLIC_KEY}`,
  );
  const url = `https://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${hash}`;

  return dispatch => {
    dispatch({type: 'GET_COMICS_REQUEST'});
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch({type: 'GET_COMICS_SUCCESS', payload: data.data.results});
      })
      .catch(error => {
        dispatch({type: 'GET_COMICS_FAILURE', payload: error.message});
      });
  };
};
export const GET_COMICS_DETAILS_REQUEST = 'GET_COMICS_DETAILS_REQUEST';
export const GET_COMICS_DETAILS_SUCCESS = 'GET_COMICS_DETAILS_SUCCESS';
export const GET_COMICS_DETAILS_ERROR = 'GET_COMICS_DETAILS_ERROR';

export const getComicsDetail = id => {
  return async dispatch => {
    dispatch({type: GET_COMICS_DETAILS_REQUEST});

    try {
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/comics/${id}?apikey=YOUR_API_KEY_HERE`,
      );
      const data = await response.data.json();

      dispatch({
        type: GET_COMICS_DETAILS_SUCCESS,
        payload: data.data.results[0],
      });
    } catch (error) {
      dispatch({type: GET_COMICS_DETAILS_ERROR, payload: error});
    }
  };
};
export const GET_CREATORS_BY_COMIC_REQUEST = 'GET_CREATORS_BY_COMIC_REQUEST';
export const GET_CREATORS_BY_COMIC_SUCCESS = 'GET_CREATORS_BY_COMIC_SUCCESS';
export const GET_CREATORS_BY_COMIC_ERROR = 'GET_CREATORS_BY_COMIC_ERROR';
export const getCreatorsByComic = comicId => {
  return async dispatch => {
    dispatch({type: GET_CREATORS_BY_COMIC_REQUEST});

    try {
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/comics/${comicId}/creators?apikey=${MARVEL_API_PUBLIC_KEY}`,
      );
      const data = await response.json();

      dispatch({
        type: GET_CREATORS_BY_COMIC_SUCCESS,
        payload: data.data.results,
      });
    } catch (error) {
      dispatch({
        type: GET_CREATORS_BY_COMIC_ERROR,
        payload: error,
      });
    }
  };
};

