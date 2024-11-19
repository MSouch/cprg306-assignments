import "../styles.css";
export default function Item({ item, onSelect }) {
  return (
    <div
      onClick={() => onSelect(item)}
      className="item"
    >
      <p className="item-name">{item.name}</p>
      <p className="item-details">Buy {item.quantity} in {item.category}</p>
    </div>
  );
}
