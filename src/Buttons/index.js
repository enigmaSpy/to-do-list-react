import './style.css';

const Buttons = ({ tasks, hideDone, toggleHideDone,doneAllTasks }) => {
    let isEveryDone = tasks.every(({ done }) => done);

    return tasks.length > 0 && (
        <div className="main__buttonWrapper">
            <button onClick={toggleHideDone} className="main__settingBtn" >
                {hideDone ? "Pokaż" : "Ukryji"} ukończone
            </button>
            <button onClick={()=>doneAllTasks()} className="main__settingBtn" disabled={isEveryDone} >Ukończ wszystkie</button>
        </div>
    )
}

export default Buttons;