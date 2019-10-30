import {
  PaginationState,
  UPDATE_FIRST_RESULT,
  UPDATE_NUMBER_OF_RESULTS,
  PaginationActionTypes
} from './types';
import { getParsedQuery } from '../../Helpers/query-string.helper';

let parsed = getParsedQuery();

const initialState: PaginationState = {
  firstResult: !parsed.first ? 0 : parseInt(parsed.first),
  numberOfResults: !parsed.results ? 12 : parseInt(parsed.results)
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
