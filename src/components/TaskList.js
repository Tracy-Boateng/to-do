import TaskItem from "./TaskItem";

function TaskList({ tasks, dispatch }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="empty-message">
          No tasks yet. Add one above!
        </p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            dispatch={dispatch}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;