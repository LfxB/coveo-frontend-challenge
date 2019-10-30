import {
  AdvancedQueryState,
  UPDATE_ADVANCED_QUERY,
  REMOVE_ADVANCED_QUERY,
  SET_ALL_ADVANCED_QUERIES,
  AdvancedQueryActionTypes
} from './types';
import { getParsedQuery } from '../../Helpers/query-string.helper';

let parsed = getParsedQuery();

const initialState: AdvancedQueryState = {
  queries: !parsed.aq ? [] : parsed.aq.split('---')
};

export function advancedQueriesReducer(
  state = initialState,
  action: AdvancedQueryActionTypes
): AdvancedQueryState {
  switch (action.type) {
    case UPDATE_ADVANCED_QUERY:
      // Form base of query, ex: tpdisponibilite=="En Ligne")
      const base = `${action.field}=="${action.value}")`;

      // Compose full query string based on action.exclude
      // ex: query exclusion (NOT @tpdisponibilite=="En Ligne"
      // ex: query inclusion (@tpdisponibilite=="En Ligne"
      const query = (action.exclude ? '(NOT @' : '(@') + base;

      // Form a new list of queries which does not include the base as a substring
      const newList = state.queries.filter(q => !q.includes(base));

      // Finally, return the new list, with the new, updated, full query concatenated.
      return {
        queries: newList.concat(query)
      };
    case REMOVE_ADVANCED_QUERY:
      return {
        queries: state.queries.filter(
          q => !q.includes(`${action.field}=="${action.value}"`)
        )
      };
    case SET_ALL_ADVANCED_QUERIES:
      return {
        queries: [...action.payload]
      };
    default:
      return state;
  }
}
