import { Wrapper, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, doneAllTasks }) => {
    let isEveryDone = tasks.every(({ done }) => done);

    return tasks.length > 0 && (
        <Wrapper>
            <Button onClick={toggleHideDone}>
                {hideDone ? "Pokaż" : "Ukryji"} ukończone
            </Button>
            <Button onClick={() => doneAllTasks()} disabled={isEveryDone}>
                Ukończ wszystkie
            </Button>
        </Wrapper>
    )
}

export default Buttons;