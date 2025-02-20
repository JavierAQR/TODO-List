import { Task } from "../reducer";
import SingleTask from "../SingleTask/SingleTask";
import "./styles.css";

type Props = {
  state: Task[];
  toggle: (id: string) => void;
  handleDeleteTask: (id: string) => void;
};

function DisplayTasks({ state, toggle, handleDeleteTask }: Props) {
  return (
    <div className="taskList">
      {state.map((task) => (
        <SingleTask
          key={task.id}
          name={task.name}
          isComplete={task.isCompleted}
          id={task.id}
          toggle={toggle}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default DisplayTasks;
