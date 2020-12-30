import { combineReducers } from 'redux';
import characters from './characters/redurcer';
import profiler from './profiler/redurcer';
import episodes from './episodes/redurcer';

export default combineReducers({ home: characters, profiler, episodes });
/**
 * //configuration redurces the app
 */
