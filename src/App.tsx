import { FormEvent, useReducer, useState } from "react";
import "./App.css";
import FormAddTask from "./FormAddTask/FormAddTask";
import Header from "./Header/Header";
import { initialState, reducer } from "./reducer";
import DisplayTasks from "./DisplayTasks/DisplayTasks";

function App() {
  const [todoText, setTodoText] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCountComplete = state.reduce(
    (obj, item) => {
      if (item.isCompleted === true) {
        obj.completes += 1;
      } else {
        obj.pending += 1;
      }
      return obj;
    },
    { completes: 0, pending: 0 }
  );

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: {
        name: todoText,
      },
    });
    setTodoText("");
  };

  const handleToggleTask = (id: string) => {
    dispatch({
      type: "TOGGLE_IS_COMPLETED",
      payload: {
        id: id,
      },
    });
  };

  const handleDeleteTask = (id: string) => {
    dispatch({
      type: "DELETE_TODO",
      payload: {
        id: id,
      },
    });
  };

  const handleDeleteAll = () => {
    dispatch({
      type: "DELETE_ALL",
    });
  };

  return (
    <>
      <Header handleCountComplete={handleCountComplete} />
      <FormAddTask
        todoText={todoText}
        setTodoText={setTodoText}
        handleAddTask={handleAddTask}
      />
      <DisplayTasks
        state={state}
        toggle={handleToggleTask}
        handleDeleteTask={handleDeleteTask}
        handleDeleteAll={handleDeleteAll}
      />
    </>
  );
}

export default App;
