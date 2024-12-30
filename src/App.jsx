import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [theme, setTheme] = useState(false);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('body').classList.add('dark');
    } else {
      document.querySelector('body').classList.remove('dark');
    }
  }, [theme]);

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="dark:bg-gray-800 bg-gray-100 h-screen">
      <button
        className="flex justify-end bg-blue-400 text-black dark:bg-gray-700 dark:text-white p-2 rounded-md dark:hover:bg-gray-300 "
        onClick={toggleTheme}>
        {theme ? 'Tema Claro' : 'Tema Oscuro'}
      </button>
      <h1 className="text-4xl font-bold flex justify-center p-4 dark:text-white ">
        To-Do List
      </h1>

      <div className="flex flex-col items-center p-4">
        <div>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
          />
          <button
            onClick={addTask}
            className="bg-blue-400 text-black dark:bg-gray-700 dark:text-white p-2 rounded-md m-2 hover:bg-gray-300">
            Add
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}{' '}
              <button
                className="bg-blue-400 text-black dark:bg-gray-700 dark:text-white p-2 rounded-md m-2 hover:bg-gray-300"
                onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
