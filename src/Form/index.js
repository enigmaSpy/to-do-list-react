import React, { useState } from 'react';
import './style.css';
const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const [isValid, checkIfIsValid] = useState(true);
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!newTaskContent.trim()) {
      checkIfIsValid(false)
      return false;
    }
    checkIfIsValid(true)
    addNewTask(newTaskContent.trim())
    setNewTaskContent("")
  }
  return (
    <form action="" className="form" onSubmit={onFormSubmit}>
      <div className="form__inputWrapper">
        <input
          value={newTaskContent}
          type="text"
          name="newTask"
          className="form__taskInput"
          placeholder="Zadanie..."
          onChange={({ target }) => {
            setNewTaskContent(target.value)
          }}
        />

        <button type="submit" className="form__addTaskBtn">
          Dodaj
        </button>
      </div>
      <div className={`form__statusAlert ${!isValid ? "form__statusAlert--active": ""}`}  >Tekst musi mieć co najmniej 3 znaki</div> 
    </form>
  )
}
export default Form;