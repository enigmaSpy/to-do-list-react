import { useState, useEffect } from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Section from "./Section";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import useTask from "./useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);
  
  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const [tasks, removeTask, toggleDone, doneAllTasks, addNewTask] = useTask();

  return (
    <Container>
      <Header />
      <Form addNewTask={addNewTask} />
      <Section
        title={"Lista zadań"}
        extras={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            doneAllTasks={doneAllTasks}
          />
        }
      />
      <Tasks
        tasks={tasks}
        hideDone={hideDone}
        removeTask={removeTask}
        toggleDone ={toggleDone }
      />
    </Container>
  );
}

export default App;
