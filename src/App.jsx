import { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import Items from "./components/items";
import { toast, ToastContainer } from "react-toastify";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const [item, setItem] = useState("");
  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      toast.error("Please provide value");
      return;
    }
    const newItems = [...items, { name: item, completed: false, id: nanoid() }];
    setItems(newItems);
    toast.success("item added to cart");
    setItem("");
    setLocalStorage(newItems);
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        item={item}
      ></Form>
      <Items items={items} removeItem={removeItem} editItem={editItem}></Items>
      <ToastContainer position="top-center"></ToastContainer>
    </section>
  );
};

export default App;
