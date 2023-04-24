import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section"
import Container from "./Container";

const tasksList = [
  { id: 1, content: "przejść na reacta", done: true },
  { id: 2, content: "zjeść kolacje", done: false },
];

function App() {
  const [hideDone, setHideDone] = useState(false)
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  }
  return (
    <Container>
      <Header />
      <Form />
      <Section
        title={"Lista zadań"}
        extras={
          <Buttons tasksList={tasksList} hideDone={hideDone} toggleHideDone={toggleHideDone}
          />}
      />
      <Tasks tasksList={tasksList} hideDone={hideDone} />
    </Container>
  );
}

export default App;
