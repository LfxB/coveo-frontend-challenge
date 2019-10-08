import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { normalQueryReducer } from './Query/reducers';

const rootReducer = combineReducers({
  normalQuery: normalQueryReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools());

  return store;
}
