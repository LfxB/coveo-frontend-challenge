import { UPDATE_QUERY } from './types';

export function updateQuery(query: string) {
  return {
    type: UPDATE_QUERY,
    query
  };
}
