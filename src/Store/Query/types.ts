// Describing the shape of the chat's slice of state
export interface QueryState {
  query: string;
}

// Describing the different ACTION NAMES available
export const UPDATE_QUERY = 'UPDATE_QUERY';

interface UpdateQueryAction {
  type: typeof UPDATE_QUERY;
  query: string;
}

export type QueryActionTypes = UpdateQueryAction;
