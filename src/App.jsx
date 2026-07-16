import useTasks from "./Hook/useTaks.jsx";
import "./App.css";
import TodoList from "./component/TodoList.jsx";
import TodoForm from "./component/TodoForm.jsx";
import Navbar from "./component/Navbar.jsx";

function App() {
  const { tasks, addTask, deleteTask, updateTask } = useTasks();

  return (
    <>
      <Navbar />
      <h1>Sego Apem Store</h1>
      <h3>Makanan Khas Indonesia</h3>
      <TodoForm onAddTask={addTask} />
      <TodoList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
      />
    </>
  );
}

export default App;
