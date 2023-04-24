import {useState} from 'react';
import './style.css';

const Tasks = ({ tasksList, hideDone }) => {    
    return (
        <ul className="main__tasksList">
       
            {tasksList.map(task => (


                <li key={task.id} className={`main__taskItem ${task.done && hideDone ? "main__taskItem--hidden" : ""}`}>
                    <button className="main__taskBtn main__taskDoneBtn--js" >
                        {!task.done ? "✔️" : "❌"}
                    </button>
                    <span className={`main__taskName ${task.done ? "main__taskName--done" : ""}`}>
                        {task.content}
                    </span>
                    <button className="main__taskBtn main__taskDeleteBtn--js">🗑️</button>
                </li>
            ))}
        </ul>
    )
};

export default Tasks;