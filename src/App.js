import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section"
import Container from "./Container";



function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "przejść na reacta", done: true },
    { id: 2, content: "zjeść kolacje", done: false },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  }

  
  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };
  
  const toggleTaskDone =(id)=>{
    setTasks(tasks=>
      tasks.map(task=> 
        task.id === id ? ({ ...task, done: !task.done }) : (task)
      )
    );
  }

  return (
    <Container>
      <Header />
      <Form />
      <Section
        title={"Lista zadań"}
        extras={
          <Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone}
          />}
      />
      <Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone}/>

    </Container>
  );
}

export default App;
