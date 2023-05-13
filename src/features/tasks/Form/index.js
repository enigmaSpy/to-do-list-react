import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FormContent, InputWrapper, TaskInput, Button, StatusAlert } from './styled';
import { addTask } from '../tasksSlice';
import { nanoid } from '@reduxjs/toolkit';

const Form = () => {

  const [newTaskContent, setNewTaskContent] = useState("");
  const [isValid, setIsValid] = useState(true);
  const inputFocus = useRef(null);

  const dispatch = useDispatch();

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

    dispatch(addTask({
      content: newTaskContent.trim(),
      done:false,
      id: nanoid()
    }));
    
    setIsValid(true);
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