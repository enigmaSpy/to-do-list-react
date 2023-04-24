import './style.css';

const Buttons = ({tasksList, hideDone})=>{
    let isEveryDone = tasksList.every(({done})=>done);
   
    return tasksList.length > 0 &&(
        <div className="main__buttonWrapper">
            <button className="main__settingBtn" >{hideDone ? "Pokaż" : "Ukryji"} ukończone </button>
            <button className="main__settingBtn" disabled={isEveryDone} >Ukończ wszystkie</button>
        </div>
    )
}

export default Buttons;