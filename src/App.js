import AddNewForm from "./components/addnew";
import ItemList from "./components/list";

function App() {
  const todos = [
    {
      id: 1,
      text: "Task 1",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Task 2",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Task 3",
      isCompleted: false,
    },
  ];
  return (
    <div className="container">
      <div className="App">
        <div
          className="card rounded shadow-sm"
          style={{ maxWidth: "500px", margin: "60px auto" }}
        >
          <div className="card-body">
            <h3 className="card-title mb-3">My Todo List</h3>
            <ItemList list={todos} />
            <AddNewForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
