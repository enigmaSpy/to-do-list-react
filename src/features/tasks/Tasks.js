import Container from "../../common/Container";
import Header from "../../common/Header";
import Form from "./Form";
import Section from "../../common/Section";
import TaskList from "./TaskList";
import Buttons from "./Buttons";

const Tasks= () =>(
    <Container>
      <Header />
      <Form  />
      <Section
        title={"Lista zadań"}
        extras={
          <Buttons/>
        }
      />
      <TaskList />
    </Container>
  );

export default Tasks;
