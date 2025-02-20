import { v4 as uuidv4 } from "uuid";

export interface Task {
  id: string;
  name: string;
  isCompleted: boolean;
}

interface AddTodoAction {
  type: "ADD_TODO";
  payload: {
    name: string;
  };
}

interface ToggleIsCompletedAction {
  type: "TOGGLE_IS_COMPLETED";
  payload: {
    id: string;
  };
}

interface DeleteTodoAction {
  type: "DELETE_TODO";
  payload: {
    id: string;
  };
}

interface DeleteAll {
  type: "DELETE_ALL";
}

export type Action =
  | AddTodoAction
  | ToggleIsCompletedAction
  | DeleteTodoAction
  | DeleteAll;

export const initialState: Task[] = [];

export const reducer = (state: Task[], action: Action): Task[] => {
  if (action.type === "ADD_TODO") {
    const { name } = action.payload;

    return [
      ...state,
      {
        id: uuidv4(),
        name,
        isCompleted: false,
      },
    ];
  }

  if (action.type === "TOGGLE_IS_COMPLETED") {
    const { id } = action.payload;

    const newState = state.map((singleTODO) => {
      if (singleTODO.id === id) {
        return {
          ...singleTODO,
          isCompleted: !singleTODO.isCompleted,
        };
      }

      return singleTODO;
    });

    return newState;
  }

  if (action.type === "DELETE_TODO") {
    const { id } = action.payload;

    const newState = state.filter((singleTODO) => {
      if (singleTODO.id !== id) {
        return singleTODO;
      }
    });

    return newState;
  }

  if (action.type === "DELETE_ALL") {
    state = [];
  }

  return state;
};
