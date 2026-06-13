import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useReducer, useEffect } from "react";

const STORAGE_KEY = "myTasks";

const initialState = {
  tasks: [],
  inputValue: "",
};

function getInitialState() {
  const savedTasks = localStorage.getItem(STORAGE_KEY);

  return {
    ...initialState,
    tasks: savedTasks ? JSON.parse(savedTasks) : [],
  };
}

function taskReducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputValue: action.payload,
      };

    case "ADD_TASK":
      if (!state.inputValue.trim()) {
        return state;
      }

      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            title: state.inputValue,
            completed: false,
            date: new Date().toLocaleString(),
          },
        ],
        inputValue: "",
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.id !== action.payload
        ),
      };

    case "TOGGLE_COMPLETE":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? {
                ...task,
                title: action.payload.title,
                date: new Date().toLocaleString(),
              }
            : task
        ),
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(
    taskReducer,
    initialState,
    getInitialState
  );

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state.tasks)
    );
  }, [state.tasks]);

  return (
    <main className="app">
      <section className="todo-container">
        <h1>Task Tracker</h1>

        <TaskForm
          inputValue={state.inputValue}
          dispatch={dispatch}
        />

        <TaskList
          tasks={state.tasks}
          dispatch={dispatch}
        />
      </section>
    </main>
  );
}

export default App;