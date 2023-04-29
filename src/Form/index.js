import { useState, useRef } from 'react';
import { FormContent, InputWrapper, TaskInput, Button, StatusAlert } from './styled';
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
  };

  return (
    <FormContent action="" onSubmit={onFormSubmit}>
      <InputWrapper>
        <TaskInput
          ref={inputFocus}
          value={newTaskContent}
          type="text"
          name="newTask"
          placeholder="Zadanie..."
          onChange={({ target }) => {
            setNewTaskContent(target.value);
          }}
        />

        <Button onClick={setFocus} type="submit">
          Dodaj
        </Button>
      </InputWrapper>
      <StatusAlert active={!isValid} >Tekst musi mieć co najmniej 3 znaki</StatusAlert>
    </FormContent>
  )
}
export default Form;