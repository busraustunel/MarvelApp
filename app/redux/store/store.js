import {configureStore} from '@reduxjs/toolkit';
import {characterReducer} from '../reducers/characterReducer';
import {comicReducer} from '../reducers/comicReducer';
import {characterComicsReducer} from '../reducers/characterComicsReducer';
import {creatorReducer} from '../reducers/creatorReducer';

const store = configureStore({
  reducer: {
    character: characterReducer,
    comic: comicReducer,
    characterComics: characterComicsReducer,
    creator: creatorReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
