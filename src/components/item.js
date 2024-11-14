function item(props) {
  const {
    id,
    text = "N/A",
    isCompleted = false,
    onItemDelete,
    onToggleCompleted,
  } = props;

  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          {isCompleted ? (
            <button
              onClick={() => onToggleCompleted(id)}
              className="btn btn-sm btn-success"
            >
              <i className="bi bi-check-square"></i>
            </button>
          ) : (
            <button
              onClick={() => onToggleCompleted(id)}
              className="btn btn-sm btn-outline"
            >
              <i className="bi bi-square"></i>
            </button>
          )}
          <span className="px-2">{text}</span>
        </div>
        <div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              const confirm = window.confirm("Are you sure?");
              if (confirm) {
                // pass id up to ItemsList
                onItemDelete(id);
              }
            }}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </li>
    </div>
  );
}

export default item;
