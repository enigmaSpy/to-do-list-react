import { List, Item, Button, ItemText } from "./styled.js"

const Tasks = ({ tasks, hideDone, removeTask, toggleDone }) => {
    return (
        <List>
            {tasks.map(({ id, content, done }) => (
                <Item hidden={done && hideDone} key={id}>
                    <Button onClick={() => toggleDone(id)}>
                        {!done ? "✔️" : "❌"}
                    </Button>
                    <ItemText done={done}>
                        {content}
                    </ItemText>
                    <Button onClick={() => removeTask(id)} >
                        🗑️
                    </Button>
                </Item>
            ))}
        </List>
    )
};

export default Tasks;