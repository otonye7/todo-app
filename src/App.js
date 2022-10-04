import { useState } from "react";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [items, setItems] = useState({
    title: ""
  });

  const handleChange = (e) => {
    const { target: { value, name } } = e;
    setItems((item) => ({...item, [name]:value}))
  }

  const AddItem = () => {
    setData((prev) => [...prev, { id: data.length+1, items, completed: false }])
  }

  const deleteItem = (id) => {
    setData((prev) => {
      return prev.filter((prevData) => prevData.id !== id)
    })
  }

  const toggleCompleted = (id) => {
    setData((prev) => {
      return prev.map((prevData) => {
        return prevData.id === id ? { ...prevData, completed: !prevData.completed } : { ...prevData }
      })
    })
  }

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <input name="title" onChange={handleChange} placeholder="Enter What You Want To Do Here" />
      <br />
      <br />
      <button onClick={AddItem}>Add</button>
      <br />
      {
        data.length > 0 && data.map((item) => (
        <div key={item.id}>
          <h1>{item.items.title}</h1>
          <h3>{item.completed === true ? "completed" : "not completed"}</h3>
          <button onClick={() => toggleCompleted(item.id)}>DONE</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
        ))
      }
    </div>
  );
}

export default App;
