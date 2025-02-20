import { Dispatch, FormEvent, SetStateAction } from "react";
import "./styles.css";

type Props = {
  todoText: string;
  setTodoText: Dispatch<SetStateAction<string>>;
  handleAddTask: (e: FormEvent<HTMLFormElement>) => void;
};

function FormAddTask({ todoText, setTodoText, handleAddTask }: Props) {
  return (
    <>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Tarea..."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          required
        />
        <input type="submit" value="AGREGAR" />
      </form>
    </>
  );
}

export default FormAddTask;
