function item(props) {
  const { text = "N/A", isCompleted = false } = props;

  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <button className="btn btn-sm btn-success">
            <i className="bi bi-check-square"></i>
          </button>
          <span className="px-2">{text}</span>
        </div>
        <div>
          <button className="btn btn-sm btn-danger">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </li>
    </div>
  );
}

export default item;
