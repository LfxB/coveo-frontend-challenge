import { UPDATE_FIRST_RESULT, UPDATE_NUMBER_OF_RESULTS } from './types';

export function updateFirstResult(firstResult: number) {
  return {
    type: UPDATE_FIRST_RESULT,
    firstResult
  };
}

export function updateNumberOfResults(numberOfResults: number) {
  return {
    type: UPDATE_NUMBER_OF_RESULTS,
    numberOfResults
  };
}
