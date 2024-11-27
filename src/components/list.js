import Item from "./item";

function ItemList(props) {
  const { list, onItemDelete, onToggleCompleted } = props;
  return (
    <ul className="list-group">
      {list.map((item) => (
        //pass thru
        <Item
          key={item.id}
          {...item}
          onItemDelete={(id) => {
            onItemDelete(id);
          }}
          onToggleCompleted={(id) => {
            onToggleCompleted(id);
          }}
        />
      ))}
    </ul>
  );
}

export default ItemList;
