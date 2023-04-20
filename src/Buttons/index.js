import './style.css';

const Buttons = ({tasksList, hideDoneTasks})=>{
    let isEveryDone = tasksList.every(({done})=>done);
   
    return tasksList.length > 0 &&(
        <div className="main__buttonWrapper">
            <button className="main__settingBtn" >{hideDoneTasks ? "Pokaż" : "Ukryji"} ukończone </button>
            <button className="main__settingBtn" disabled={isEveryDone} >Ukończ wszystkie</button>
        </div>
    )
}

export default Buttons;