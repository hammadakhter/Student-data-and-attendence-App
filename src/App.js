import { useEffect, useState } from "react";
import "./App.css";
import {AiOutlineDelete} from "react-icons/ai";
import {BsCheckLg} from "react-icons/bs";

function App() {
  const [iscompletescreen,setiscompletescreen] = useState(false);
  const [allTodos,setTodos]= useState([]);
  const [newstudents,setnewstudents]= useState("");
  const [newdetail,setnewdetail] = useState("");

  const handleAddTodo = ()=>{
    let newTodoItem = {
      student:newstudents,
      detail:newdetail
    }

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist',JSON.stringify(updatedTodoArr));
  }

    useEffect(()=>{
      let savedtodo= JSON.parse(localStorage.getItem('todolist'));
      if(savedtodo){
        setTodos(savedtodo);
      }
    },[])

  return (
    <div className="App">
      <h1 className="my-3">Students attendance Data</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Student Name</label>
            <input type="text" value={newstudents} onChange={(e)=>setnewstudents(e.target.value)} placeholder="Enter student Name" />
          </div>
          <div className="todo-input-item">
            <label>Student Detail</label>
            <input type="text" value={newdetail} onChange={(e)=>setnewdetail(e.target.value)} placeholder="Enter student detail" />
          </div>
          <div className="todo-input-item">
            <button type="button" onClick={handleAddTodo} className="primary-Btn">
              Add
            </button>
          </div>
        </div>

        <div className="btn-area">
        <button className={`secondaryBtn ${iscompletescreen===false && 'active'}`} onClick={()=>setiscompletescreen(false)}>Todo</button>
        <button className={`secondaryBtn ${iscompletescreen===true && 'active'}`} onClick={()=>setiscompletescreen(true)}>Check attendance</button>
      </div>

      <div className="todo-list">
      {allTodos.map((item,index)=>{
        return(
          <div className="todo-list-item" key={index}>
          <div>
           <h3>{item.student}</h3>
            <p>{item.detail}</p>
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
        )
      })}
      </div>

      
      </div>
    </div>
  );
}

export default App;
