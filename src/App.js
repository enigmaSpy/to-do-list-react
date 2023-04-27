import { useState, useEffect } from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Section from "./Section";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks((tasks) =>
      tasks.filter((task) => task.id !== id)
    );
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const doneAllTasks = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({ ...task, done: true }))
    );
  };

  const addNewTask = (content) => {
    setTasks((tasks) => [
      ...tasks,
      {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        content,
        done: false,
      },
    ]);
  };

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
        toggleTaskDone={toggleTaskDone}
      />
    </Container>
  );
}

export default App;
