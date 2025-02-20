import "./styles.css";

type Props = {
  handleCountComplete: {
    completes: number;
    pending: number;
  };
};

function Header({ handleCountComplete }: Props) {
  const taskCompletas =
    handleCountComplete.completes > 0 && handleCountComplete.pending === 0;
  return (
    <div className="encabezado">
      <h1 className="titulo">TO-DO LIST</h1>
      {taskCompletas ? (
        <h1 className="full-complete">Completaste todas las tareas!</h1>
      ) : (
        <>
          <h2> Tareas Completadas: {handleCountComplete.completes}</h2>
          <h2> Tareas Pendientes: {handleCountComplete.pending}</h2>{" "}
        </>
      )}
    </div>
  );
}

export default Header;
