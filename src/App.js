import { useEffect, useState } from "react";
import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

function App() {
  const [iscompletescreen, setiscompletescreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newstudents, setnewstudents] = useState("");
  const [newdetail, setnewdetail] = useState("");
  const [completedTodos, setcompletedTodos] = useState([]);

  const handleAddTodo = () => {
    let newTodoItem = {
      student: newstudents,
      detail: newdetail,
    };

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
    setnewstudents("");
    setnewdetail("");
  };

  const handledeletecompletedtodo = (index)=>{
    let reducedtodo = [...completedTodos];
    reducedtodo.splice(index,1);

    localStorage.setItem("completedTodos", JSON.stringify(reducedtodo));
    setcompletedTodos(reducedtodo);

  }

  useEffect(() => {
    let savedtodo = JSON.parse(localStorage.getItem("todolist"));
    let savedCompletedTodo = JSON.parse(localStorage.getItem("completedTodos"));
    if (savedtodo) {
      setTodos(savedtodo);
    }


    if (savedCompletedTodo){
      setcompletedTodos(savedCompletedTodo);

    }
  }, []);

  const handlecomplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completeOn = dd + "-" + mm + "-" + yyyy + " " + "at" + " " + h + ":" + m + ":" + s;

    let filteredItem = {
      ...allTodos[index],
      completeOn: completeOn,
    };

    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setcompletedTodos(updatedCompletedArr);
    localStorage.setItem("completedTodos", JSON.stringify(updatedCompletedArr));
  };

  const handledeletetodo = (index) => {
    let reducedtodo = [...allTodos];
    reducedtodo.splice(index,1);

    localStorage.setItem("todolist", JSON.stringify(reducedtodo));
    setTodos(reducedtodo);
  };

  return (
    <div className="App">
      <h1 className="my-3">Students attendance Data</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Student Name</label>
            <input
              type="text"
              value={newstudents}
              onChange={(e) => setnewstudents(e.target.value)}
              placeholder="Enter student Name"
            />
          </div>
          <div className="todo-input-item">
            <label>Student Detail</label>
            <input
              type="text"
              value={newdetail}
              onChange={(e) => setnewdetail(e.target.value)}
              placeholder="Enter student detail"
            />
          </div>
          <div className="todo-input-item">
            <button
              type="button"
              onClick={handleAddTodo}
              className="primary-Btn"
            >
              Add
            </button>
          </div>
        </div>

        <div className="btn-area">
          <button
            className={`secondaryBtn ${iscompletescreen === false && "active"}`}
            onClick={() => setiscompletescreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondaryBtn ${iscompletescreen === true && "active"}`}
            onClick={() => setiscompletescreen(true)}
          >
            Check attendance
          </button>
        </div>

        <div className="todo-list">
          {iscompletescreen === false &&
            allTodos.map((item, index) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{item.student}</h3>
                    <p>{item.detail}</p>
                  </div>
                  <div>
                    <AiOutlineDelete
                      className="icon"
                      onClick={() => handledeletetodo(index)}
                    />
                    <BsCheckLg
                      className=" check-icon"
                      onClick={() => handlecomplete(index)}
                    />
                  </div>
                </div>
              );
            })}

          {iscompletescreen === true &&
            completedTodos.map((item, index) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{item.student}</h3>
                    <p>{item.detail}</p>
                    <p><small>student attendance marked on :- {item.completeOn}</small></p>
                  </div>
                  <div>
                    <AiOutlineDelete
                      className="icon"
                      onClick={() => handledeletecompletedtodo(index)}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
