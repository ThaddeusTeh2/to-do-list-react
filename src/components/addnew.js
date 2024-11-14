import { useState } from "react";

function AddNewForm(props) {
  const { onNewItemAdded } = props;
  const [itemName, setItemName] = useState("");
  return (
    <div className="mt-4">
      <form className="d-flex justify-content-between align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="Add new task..."
          required
          name="item_name"
          value={itemName}
          // updates itemName state
          onChange={(event) => {
            setItemName(event.target.value);
          }}
        />
        <button
          className="btn btn-primary btn-sm rounded ms-2"
          onClick={(event) => {
            // disable button submit behavior
            event.preventDefault();
            // check for empty string
            itemName === ""
              ? alert("Please enter an item")
              : onNewItemAdded(itemName) && setItemName("");
          }}
        >
          Add
        </button>{" "}
      </form>
    </div>
  );
}

export default AddNewForm;
