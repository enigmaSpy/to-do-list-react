import { useSelector, useDispatch } from "react-redux";
import { List, Item, Button, ItemText } from "./styled.js"
import { selectTasks, toggleDone, removeTask } from "../tasksSlice.js";

const TaskList = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <List>
            {tasks.map(({ id, content, done }) => (
                <Item hidden={done && hideDone} key={id}>
                    <Button onClick={() => dispatch(toggleDone(id))}>
                        {!done ? "✔️" : "❌"}
                    </Button>
                    <ItemText done={done}>
                        {content}
                    </ItemText>
                    <Button onClick={() => dispatch(removeTask(id))} >
                        🗑️
                    </Button>
                </Item>
            ))}
        </List>
    )
};

export default TaskList;