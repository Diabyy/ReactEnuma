import React, { useState } from 'react';
import useTasks from "./Hook/useTaks.jsx";
import "./App.css";
import TodoList from "./component/TodoList.jsx";
import TodoForm from "./component/TodoForm.jsx";
import Navbar from "./component/Navbar.jsx";
import Profil from "./component/Profil.jsx";
import Projek from "./component/Projek.jsx";
import About from "./component/About.jsx";

function App() {
  const { tasks, addTask, deleteTask, updateTask } = useTasks();
  const [activeSection, setActiveSection] = useState('Home');

  const renderSection = () => {
    switch (activeSection) {
      case 'Profil':
        return <Profil />;
      case 'Projek':
        return <Projek />;
      case 'About':
        return <About />;
      case 'Home':
      default:
        return (
          <div className="section-container home-section">
            <div className="section-header">
              <span className="section-eyebrow">APEM STORE</span>
              <h1 className="main-title">
                Hasil Pelatihan <span className="title-dot">●</span>
              </h1>
              <h3>Aplikasi Manajemen Tugas</h3>
            </div>
            <TodoForm onAddTask={addTask} />
            <TodoList
              tasks={tasks}
              onDeleteTask={deleteTask}
              onUpdateTask={updateTask}
            />
          </div>
        );
    }
  };

  return (
    <div className="app-wrapper">
      {/* Background blobs for smooth unstructured aesthetic */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="main-content">
        <div key={activeSection} className="fade-in-section">
          {renderSection()}
        </div>
      </main>
      
      <div id="spacer"></div>
    </div>
  );
}

export default App;
