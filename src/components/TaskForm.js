import React from "react";

function TaskForm({ inputValue, dispatch }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TASK",
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        placeholder="Enter a task..."
        value={inputValue}
        onChange={(e) =>
          dispatch({
            type: "CHANGE_INPUT",
            payload: e.target.value,
          })
        }
      />

      <button className="add-btn" type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;