import Action from './types/Action';
import State from './types/State';

export const init = {
  questions: [],
  topics: [],
};
// reducer.ts
export const questionsReducer = (
  state: State = init,
  action: Action
): State => {
  switch (action.type) {
    case 'INIT_QUESTIONS':
      return {
        ...state,
        questions: action.payload
      };
      case 'INIT_TOPICS':
        console.log(action.payload);

      return {
        ...state,
        topics: action.payload
      };
    default: return state;
  }
};
