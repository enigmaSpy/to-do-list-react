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
const hideDone = false;

function App() {
  return (
    <Container>
      <Header />
      <Form />
      <Section 
        title={"Lista zadań"}
        extras={<Buttons tasksList={tasksList} hideDone={hideDone} />}
      />
      <Tasks tasksList={tasksList} hideDone={hideDone} />
    </Container>
  );
}

export default App;
