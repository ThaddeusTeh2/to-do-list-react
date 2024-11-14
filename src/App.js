import { useState } from "react";
import { nanoid } from "nanoid";

import AddNewForm from "./components/addnew";
import ItemList from "./components/list";

function App() {
  const [todos, setTodos] = useState([]);

  console.log(todos);

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
              list={todos}
              /* basically returns all items in state without selected item */
              onItemDelete={(id) => {
                // filter OUT item with given id
                const newTodos = todos.filter((item) => item.id !== id);
                // update newTodos with setState function
                setTodos(newTodos);
              }}
              /* function takes id, */
              onToggleCompleted={(id) => {
                // maps over todos array
                const updatedTodos = todos.map((item) =>
                  // & flips isCompleted value 4 selected item.
                  item.id === id
                    ? { ...item, isCompleted: !item.isCompleted }
                    : item
                );

                console.log(id);
                // update newTodos with setState function
                setTodos(updatedTodos);
              }}
            />

            {/* form submission handling */}
            <AddNewForm
              onNewItemAdded={(itemName) => {
                // clone existing state
                const newTodos = [...todos];
                // push new item into newTodos
                newTodos.push({
                  id: nanoid(), // generate id
                  text: itemName,
                });
                // update newTodos with setState function
                setTodos(newTodos);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
