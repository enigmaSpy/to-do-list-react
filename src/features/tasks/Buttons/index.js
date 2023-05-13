import { useSelector,useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import { selectTasks, toggleHideDone,doneAllTasks } from "../tasksSlice";

const Buttons = () => {
const {tasks, hideDone} = useSelector(selectTasks);
const dispatch = useDispatch();

    let isEveryDone = tasks.every(({ done }) => done);

    return tasks.length > 0 && (
        <Wrapper>
            <Button onClick={()=>dispatch(toggleHideDone())}>
                {hideDone ? "Pokaż" : "Ukryji"} ukończone
            </Button>
            <Button onClick={() =>dispatch(doneAllTasks())} disabled={isEveryDone}>
                Ukończ wszystkie
            </Button>
        </Wrapper>
    )
}

export default Buttons;