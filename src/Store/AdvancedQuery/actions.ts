import { UPDATE_ADVANCED_QUERY, REMOVE_ADVANCED_QUERY } from './types';

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
