// Describing the shape of the advanced queries' slice of state.
export interface AdvancedQueryState {
  queries: string[];
}

// Describing the different ACTION NAMES available.
export const UPDATE_ADVANCED_QUERY = 'UPDATE_ADVANCED_QUERY';
export const REMOVE_ADVANCED_QUERY = 'REMOVE_ADVANCED_QUERY';
export const SET_ALL_ADVANCED_QUERIES = 'SET_ALL_ADVANCED_QUERIES';

interface UpdateAdvancedQueryAction {
  type: typeof UPDATE_ADVANCED_QUERY;
  field: string;
  value: string;
  exclude: boolean;
}

interface RemoveAdvancedQueryAction {
  type: typeof REMOVE_ADVANCED_QUERY;
  field: string;
  value: string;
}

interface SetAllAdvancedQueries {
  type: typeof SET_ALL_ADVANCED_QUERIES;
  payload: string[];
}

export type AdvancedQueryActionTypes =
  | UpdateAdvancedQueryAction
  | RemoveAdvancedQueryAction
  | SetAllAdvancedQueries;
