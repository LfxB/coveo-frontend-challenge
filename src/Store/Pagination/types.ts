// Describing the shape of the paginations's slice of state.
export interface PaginationState {
  firstResult: number;
  numberOfResults: number;
}

// Describing the different ACTION NAMES available.
export const UPDATE_FIRST_RESULT = 'UPDATE_FIRST_RESULT';
export const UPDATE_NUMBER_OF_RESULTS = 'UPDATE_NUMBER_OF_RESULTS';

interface UpdateFirstResultAction {
  type: typeof UPDATE_FIRST_RESULT;
  firstResult: number;
}

interface UpdateNumberOfResultsAction {
  type: typeof UPDATE_NUMBER_OF_RESULTS;
  numberOfResults: number;
}

export type PaginationActionTypes =
  | UpdateFirstResultAction
  | UpdateNumberOfResultsAction;
