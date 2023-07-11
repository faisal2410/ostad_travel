import { useState } from "react";

import Form from "./components/form/Form";
import PackingList from "./components/packingList/PackingList";
import Stats from "./components/stats/Stats";
import Logo from "./components/logo/Logo"





const App = () => {



  const [items, setItems] = useState([]);

  const handleAddItems=(item)=> {
    setItems((items) => [...items, item]);
  }

  const handleDeleteItem=(id)=> {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  const handleToggleItem=(id)=> {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  const handleClearList=()=> {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
   
    <div className="app">  
    
       <Logo  ></Logo>
     
        <Form onAddItems={handleAddItems}   />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
     
  );
};

export default App;
