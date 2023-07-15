import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { RootState } from '../state';

import { initialState as initialStateUser } from './../reducers/user.reducer';

export const hydrationMetaReducer = (
  reducer: ActionReducer<RootState>
): ActionReducer<RootState> => {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem('state');
      if (storageValue) {
        try {
          const storageValueJson = JSON.parse(storageValue);
          storageValueJson['userStoreModule']['user'] = initialStateUser;
          return storageValueJson;
        } catch {
          localStorage.removeItem('state');
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('state', JSON.stringify(nextState));
    return nextState;
  };
};
