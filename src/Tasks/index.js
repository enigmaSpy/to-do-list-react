import './style.css';

const Tasks = ({ tasks, hideDone, removeTask,toggleTaskDone }) => {    
    return (
        <ul className="main__tasks">       
            {tasks.map(({id,content,done}) => (

                <li key={id} className={`main__taskItem ${done && hideDone ? "main__taskItem--hidden" : ""}`}>
                    <button className="main__taskBtn main__taskDoneBtn--js"  onClick={()=>toggleTaskDone(id)}>
                        {!done ? "✔️" : "❌"}
                    </button>
                    <span className={`main__taskName ${done ? "main__taskName--done" : ""}`}>
                        {content}
                    </span>
                    <button className="main__taskBtn main__taskDeleteBtn--js" onClick={() => removeTask(id)} >🗑️</button>
                </li>
            ))}
        </ul>
    )
};

export default Tasks;