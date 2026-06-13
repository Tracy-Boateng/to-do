import React from "react";

function TaskForm({ inputValue, dispatch }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TASK",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
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

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;