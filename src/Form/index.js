import './style.css';
const Form = () =>(
    <form action="" className="form">
        <div className="form__inputWrapper">
          <input
            type="text"
            name="newTask"
            className="form__taskInput form__taskInput--js"
            placeholder="Zadanie..."
          />

          <button type="submit" className="form__addTaskBtn">
            Dodaj
          </button>
        </div>
        {/* <div className="form__statusAlert">Tekst musi mieć co najmniej 3 znaki</div> */}
      </form>
)
export default Form;