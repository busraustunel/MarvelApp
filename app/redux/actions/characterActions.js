import {MARVEL_API_PUBLIC_KEY, MARVEL_API_PRIVATE_KEY} from '../config';
import md5 from 'md5';

export const getCharacters = () => {
  const timestamp = new Date().getTime();
  const hash = md5(
    `${timestamp}${MARVEL_API_PRIVATE_KEY}${MARVEL_API_PUBLIC_KEY}`,
  );
  const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${hash}`;

  return dispatch => {
    dispatch({type: 'GET_CHARACTERS_REQUEST'});
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch({type: 'GET_CHARACTERS_SUCCESS', payload: data.data.results});
      })
      .catch(error => {
        dispatch({type: 'GET_CHARACTERS_FAILURE', payload: error.message});
      });
  };
};

export const GET_CHARACTER_COMICS_REQUEST = 'GET_CHARACTER_COMICS_REQUEST';
export const GET_CHARACTER_COMICS_SUCCESS = 'GET_CHARACTER_COMICS_SUCCESS';
export const GET_CHARACTER_COMICS_ERROR = 'GET_CHARACTER_COMICS_ERROR';

export const getCharacterComics = characterId => {
  return async dispatch => {
    dispatch({type: GET_CHARACTER_COMICS_REQUEST});

    try {
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?apikey=${MARVEL_API_PUBLIC_KEY}`,
      );
      const data = await response.json();

      dispatch({
        type: GET_CHARACTER_COMICS_SUCCESS,
        payload: data.data.results[0],
      });
    } catch (error) {
      dispatch({type: GET_CHARACTER_COMICS_ERROR, payload: error});
    }
  };
};

