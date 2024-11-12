import Item from "./item";

function ItemList(props) {
  const { list } = props;
  return (
    <ul className="list-group">
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default ItemList;
