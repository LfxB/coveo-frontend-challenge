import {
  PaginationState,
  UPDATE_FIRST_RESULT,
  UPDATE_NUMBER_OF_RESULTS,
  PaginationActionTypes
} from './types';

const initialState: PaginationState = {
  firstResult: 0,
  numberOfResults: 12
};

export function paginationReducer(
  state = initialState,
  action: PaginationActionTypes
): PaginationState {
  switch (action.type) {
    case UPDATE_FIRST_RESULT:
      return {
        ...state,
        firstResult: action.firstResult
      };
    case UPDATE_NUMBER_OF_RESULTS:
      return {
        ...state,
        numberOfResults: action.numberOfResults
      };
    default:
      return state;
  }
}
