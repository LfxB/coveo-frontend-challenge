import {
  AdvancedQueryState,
  UPDATE_ADVANCED_QUERY,
  REMOVE_ADVANCED_QUERY,
  AdvancedQueryActionTypes
} from './types';

const initialState: AdvancedQueryState = {
  queries: []
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
    default:
      return state;
  }
}
