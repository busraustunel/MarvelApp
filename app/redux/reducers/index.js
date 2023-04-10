import {combineReducers} from 'redux';
import {characterReducer} from './characterReducer';
import {comicReducer} from './comicReducer';
import {characterComicsReducer} from './characterComicsReducer';
import {creatorReducer} from './creatorReducer';

const rootReducer = combineReducers({
  character: characterReducer,
  comic: comicReducer,
  characterComics: characterComicsReducer,
  creator: creatorReducer,
});

export default rootReducer;
