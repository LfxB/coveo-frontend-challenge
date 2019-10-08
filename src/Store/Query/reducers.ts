import { QueryState, UPDATE_QUERY, QueryActionTypes } from './types';

const initialState: QueryState = {
  query: ''
};

export function normalQueryReducer(
  state = initialState,
  action: QueryActionTypes
): QueryState {
  switch (action.type) {
    case UPDATE_QUERY:
      return {
        query: action.query
      };
    default:
      return state;
  }
}
