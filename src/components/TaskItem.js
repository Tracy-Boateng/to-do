import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

function TaskItem({ task, dispatch }) {
  const handleEdit = () => {
    const updatedText = prompt(
      "Edit task:",
      task.title
    );

    if (updatedText && updatedText.trim()) {
      dispatch({
        type: "EDIT_TASK",
        payload: {
          id: task.id,
          title: updatedText,
        },
      });
    }
  };

  return (
    <div
      className={`task-item ${
        task.completed ? "completed" : ""
      }`}
    >
      <div>
        <h3>{task.title}</h3>
        <p>{task.date}</p>
      </div>

      <div className="task-actions">
        <button
          onClick={() =>
            dispatch({
              type: "TOGGLE_COMPLETE",
              payload: task.id,
            })
          }
        >
          <FaCheck />
        </button>

        <button onClick={handleEdit}>
          <FaEdit />
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "DELETE_TASK",
              payload: task.id,
            })
          }
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;