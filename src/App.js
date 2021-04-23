import React, {useState} from 'react';

const initialstate = {
    id: "",
    item: ""
}

function App() {
  const [todo, settodo] = useState(initialstate);
  const [todoList, settodoList] = useState([]);

  const inputchange = (e) => {
    e.preventDefault();
    settodo({ id : Math.random() * 1000,item : e.target.value });
  }

  const handleClick = (e) => {
    e.preventDefault();
    settodoList([...todoList,todo]);
    settodo(initialstate);
  }

  const deleteCLick = (id) => {
    const result = todoList.filter((item) => item.id !== id);
    settodoList(result);
  }
  return (
    <div className="container m-5">
      <div className="col-8 offset-2">
        <div className="jumbotron text-center">
          <h1 className="display-4 font-weight-bold">To Do List</h1>
        </div>
        <form onSubmit={handleClick}>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Add Item Here" 
            value={todo.item} onChange={inputchange}
            />
            <div className="input-group-append">
              <button onClick={handleClick} className="btn btn-outline-secondary" type="button">Add</button>
            </div>
          </div>
        </form>
        <div>
          {
            todoList.map((item) => {
              return (
              <div key={item.id} className="alert alert-success">
                {item.item}
                <button onClick={() => {deleteCLick(item.id)}} type="button" className="close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
