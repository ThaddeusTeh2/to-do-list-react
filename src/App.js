import { useState } from "react";
import { nanoid } from "nanoid";

import AddNewForm from "./components/addnew";
import ItemList from "./components/list";

function App() {
  const stringTodos = localStorage.getItem("todos");
  const initialTodos = JSON.parse(stringTodos) || [];
  const [todoList, setTodoList] = useState(initialTodos);

  //add new item
  const handleItemNew = (itemName) => {
    const newTodo = { id: nanoid(), text: itemName, isCompleted: false };
    setTodoList([...todoList, newTodo]);
  };

  //delete item
  const handleItemDelete = (id) => {
    const updatedTodos = todoList.filter((item) => item.id !== id);
    setTodoList(updatedTodos);
  };

  //toggle complete
  const handleToggleCompleted = (id) => {
    const updatedTodos = todoList.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodoList(updatedTodos);
  };

  return (
    <div className="container">
      <div className="App">
        <div
          className="card rounded shadow-sm"
          style={{ maxWidth: "500px", margin: "60px auto" }}
        >
          <div className="card-body">
            <h3 className="card-title mb-3">Todos List</h3>
            {/* item list */}
            <ItemList
              list={todoList}
              onItemDelete={handleItemDelete}
              onToggleCompleted={handleToggleCompleted}
            />

            {/* form submission handling */}
            <AddNewForm onNewItemAdded={handleItemNew} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
