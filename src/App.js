import './App.css';
import React, { useState } from 'react';


function App() {

  const [items, setItems] = useState([
    { task: "Wash the dishes", priority: "high" },
    { task: "Clean the bathroom", priority: "low" },
    { task: "Do the shopping", priority: "high" }
  ])

  const [newItem, setNewItem] = useState("");

  const [newPriority, setNewPriority] = useState("");

  const itemNodes = items.map((item, index) => {
    return <ul key={index}>
      <span>{item.task}</span>
    </ul>
  })


  const handleItemInput = (event) => {
    setNewItem(event.target.value);
  }

  const handleButtonInput = (event) => {
    setNewPriority(event.target.value);
  }

  const saveNewItem = (event) => {
    event.preventDefault();
    const copyItems = [...items];
    copyItems.push({task: newItem, priority: newPriority});
    setItems(copyItems);
    setNewItem("");
  }


  return (
    <div className="App">
      <h1>ToDo's</h1>

      <form onSubmit={saveNewItem}>
        <label htmlFor="new-item">Add a new item:</label>
        <input id="new-item" type="text" value={newItem} onChange={handleItemInput}/>
        <span>Priority:</span>
        <span>High<input type="radio" name="priority" value="high" onChange={handleButtonInput}/></span>
        <span>Low<input type="radio" name="priority" value="low" onChange={handleButtonInput} /></span>
        <input type="submit" value="Save New item"/>
      </form>

      <ul>
        {itemNodes}
      </ul>

    </div>
  );
}

export default App;
