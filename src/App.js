import { useState } from "react";
import "./App.css";
import {AiOutlineDelete} from "react-icons/ai";
import {BsCheckLg} from "react-icons/bs";

function App() {
  const [iscompletescreen,setiscompletescreen] = useState(false);
  return (
    <div className="App">
      <h1 className="my-3">MY Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Student Name</label>
            <input type="text" placeholder="Enter student Name" />
          </div>
          <div className="todo-input-item">
            <label>Student Detail</label>
            <input type="text" placeholder="Enter student detail" />
          </div>
          <div className="todo-input-item">
            <button type="button" className="primary-Btn">
              Add
            </button>
          </div>
        </div>

        <div className="btn-area">
        <button className={`secondaryBtn ${iscompletescreen===false && 'active'}`} onClick={()=>setiscompletescreen(false)}>Todo</button>
        <button className={`secondaryBtn ${iscompletescreen===true && 'active'}`} onClick={()=>setiscompletescreen(true)}>Check attendance</button>
      </div>

      <div className="todo-list">
      <div className="todo-list-item">
        <div>
         <h3>student name 1</h3>
          <p>Student Detail</p>
        </div>
        <div>
        <AiOutlineDelete
                    className="icon"
                  />
                  <BsCheckLg
                    className=" check-icon"
                  />
        </div>
      </div>
      </div>

      
      </div>
    </div>
  );
}

export default App;
