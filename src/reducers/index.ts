import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import blog, { TBlogState } from './blog';
import nav, { TNavState } from './nav';

export interface TRedux {
  blog: TBlogState;
  nav: TNavState;
}

export const reducers = combineReducers({
  blog,
  nav
});

export default createStore(reducers, applyMiddleware(ReduxThunk));
