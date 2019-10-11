// Describing the shape of the ShowFilterMenu's slice of state.
export interface ShowFilterMenuState {
  enabled: boolean;
}

// Describing the different ACTION NAMES available.
export const TOGGLE = 'TOGGLE';

interface ToggleAction {
  type: typeof TOGGLE;
  enabled: boolean;
}

export type ToggleActionTypes = ToggleAction;
