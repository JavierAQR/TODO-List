import "./styles.css";

type Props = {
  name: string;
  isComplete: boolean;
  id: string;
  toggle: (id: string) => void;
  handleDeleteTask: (id: string) => void;
};

function SingleTask({ name, isComplete, toggle, id, handleDeleteTask }: Props) {
  return (
    <div className={`task ${isComplete ? "complete" : "uncomplete"}`}>
      <h1>{name}</h1>
      {isComplete ? null : <button onClick={() => toggle(id)}>✔️</button>}
      <button onClick={() => handleDeleteTask(id)}>❌</button>
    </div>
  );
}

export default SingleTask;
