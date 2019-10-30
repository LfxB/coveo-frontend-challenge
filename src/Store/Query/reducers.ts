import { QueryState, UPDATE_QUERY, QueryActionTypes } from './types';
import { getParsedQuery } from '../../Helpers/query-string.helper';

let parsed = getParsedQuery();

const initialState: QueryState = {
  query: !parsed.q ? '' : parsed.q
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
