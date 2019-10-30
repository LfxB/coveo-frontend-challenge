import {
  UPDATE_ADVANCED_QUERY,
  REMOVE_ADVANCED_QUERY,
  SET_ALL_ADVANCED_QUERIES
} from './types';

export function updateAdvancedQuery(
  field: string,
  value: string,
  exclude: boolean
) {
  return {
    type: UPDATE_ADVANCED_QUERY,
    field,
    value,
    exclude
  };
}

export function removeAdvancedQuery(field: string, value: string) {
  return {
    type: REMOVE_ADVANCED_QUERY,
    field,
    value
  };
}

export function SetAllAdvancedQueries(payload: string[]) {
  return {
    type: SET_ALL_ADVANCED_QUERIES,
    payload
  };
}
