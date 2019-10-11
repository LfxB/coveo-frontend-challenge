import { ShowFilterMenuState, TOGGLE, ToggleActionTypes } from './types';

const initialState: ShowFilterMenuState = {
  enabled: false
};

export function showFilterMenuReducer(
  state = initialState,
  action: ToggleActionTypes
): ShowFilterMenuState {
  switch (action.type) {
    case TOGGLE:
      return {
        enabled: action.enabled
      };
    default:
      return state;
  }
}
