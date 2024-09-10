import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import '../assets/styles/todo.css';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const history = useHistory();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <main>
        <section className="container">
          <article className="title-container">
            <ul>
              <li className="picker">
                <label htmlFor="bird">
                  <div id="bird-icon">
                    <img src="../data/img/icons/bird-svgrepo-com.svg" alt="Bird Icon" />
                  </div>
                </label>
                <select name="bird" id="bird">
                  <option value="" disabled hidden selected>반려조 선택</option>
                  <option value="bird01">사랑</option>
                  <option value="bird02">초롱</option>
                </select>
              </li>
              <li className="picker">
                <label htmlFor="jdate">
                  <div id="calender-icon">
                    <img src="../data/img/icons/calendar-note-date-svgrepo-com.svg" alt="Calendar Icon" />
                  </div>
                </label>
                <input type="date" id="jdate" required />
              </li>
            </ul>
          </article>
          <article className="todo-container">
            <ul id="todo-list">
              {todos.map((todo, index) => (
                <li key={index} className="todo-item">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(index)}
                  />
                  <span className={todo.completed ? 'task-content completed' : 'task-content'}>
                    {todo.text}
                  </span>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
            <form id="todo-form" onSubmit={handleAddTodo}>
              <input
                type="text"
                id="todo-input"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="새로운 할 일 추가"
                required
              />
              <button type="submit">
                <img src="../data/img/icons/circle-pluc-solid.svg" alt="Add Icon" />
              </button>
            </form>
          </article>
        </section>
      </main>
      <footer className="navbar">
        <ul>
          <li>
            <a href="../html/main-board.html">
              <img src="../data/img/icons/compass-solid.svg" alt="Compass Icon" />
            </a>
          </li>
          <li>
            <a href="../html/main-todo.html">
              <img src="../data/img/icons/list-check-solid-color.svg" alt="Todo Icon" />
            </a>
          </li>
          <li>
            <a href="../html/main.html">
              <img src="../data/img/icons/pen-nib-solid.svg" alt="Pen Icon" />
            </a>
          </li>
          <li>
            <a href="../html/checker_info.html">
              <img src="../data/img/icons/stethoscope-solid.svg" alt="Stethoscope Icon" />
            </a>
          </li>
          <li>
            <a href="../html/login.html">
              <img src="../data/img/icons/circle-user-solid.svg" alt="User Icon" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default TodoPage;
