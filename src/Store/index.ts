import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { normalQueryReducer } from './Query/reducers';
import { paginationReducer } from './Pagination/reducers';

const rootReducer = combineReducers({
  normalQuery: normalQueryReducer,
  pagination: paginationReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools());

  return store;
}
