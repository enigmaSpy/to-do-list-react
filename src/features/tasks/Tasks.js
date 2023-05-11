import { useState } from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Form from "./Form";
import Section from "../../common/Section";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import useTask from "../../useTasks";

function Tasks() {
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
      <TaskList
        tasks={tasks}
        hideDone={hideDone}
        removeTask={removeTask}
        toggleDone ={toggleDone }
      />
    </Container>
  );
}

export default Tasks;
