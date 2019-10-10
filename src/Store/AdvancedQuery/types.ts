// Describing the shape of the advanced queries' slice of state.
export interface AdvancedQueryState {
  queries: string[];
}

// Describing the different ACTION NAMES available.
export const UPDATE_ADVANCED_QUERY = 'UPDATE_ADVANCED_QUERY';
export const REMOVE_ADVANCED_QUERY = 'REMOVE_ADVANCED_QUERY';

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

export type AdvancedQueryActionTypes =
  | UpdateAdvancedQueryAction
  | RemoveAdvancedQueryAction;
