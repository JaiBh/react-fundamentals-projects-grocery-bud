import SingleItem from "./SingleItem";

const items = ({ items, removeItem, editItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            {...item}
            removeItem={removeItem}
            id={item.id}
            editItem={editItem}
          ></SingleItem>
        );
      })}
    </div>
  );
};
export default items;
