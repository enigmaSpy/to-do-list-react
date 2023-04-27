import { useState,useRef } from 'react';
import './style.css';
const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const [isValid, setIsValid] = useState(true);
  const inputFocus = useRef(null);
  const setFocus = () => {
    inputFocus.current.focus();
  };
  const requiredLength = 3;
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!(newTaskContent.trim().length >= requiredLength)) {
      setIsValid(false);
      return false;
    }
    setIsValid(true);
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  }
  return (
    <form action="" className="form" onSubmit={onFormSubmit}>
      <div className="form__inputWrapper">
        <input
          ref={inputFocus}
          value={newTaskContent}
          type="text"
          name="newTask"
          className="form__taskInput"
          placeholder="Zadanie..."
          onChange={({ target }) => {
            setNewTaskContent(target.value);
          }}
        />

        <button onClick={setFocus} type="submit" className="form__addTaskBtn">
          Dodaj
        </button>
      </div>
      <div className={`form__statusAlert ${!isValid ? "form__statusAlert--active": ""}`}  >Tekst musi mieć co najmniej 3 znaki</div> 
    </form>
  )
}
export default Form;