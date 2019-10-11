import { TOGGLE } from './types';

export function toggleFilterMenu(enabled: boolean) {
  return {
    type: TOGGLE,
    enabled
  };
}
