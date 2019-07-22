import { combineReducers } from 'redux';
import signUp from './signUp/reducer';

const qAndA = combineReducers({
    signUp
});
export default qAndA;