import React, { useState, useEffect } from 'react';
import './App.css';
import ListItem from './components/ListItem';
import Add from './components/Add';
import * as ListItemServices from './services/ListItemService';
import { IState } from './App.types';

function App() {

  const [items, setItems] = useState<IState['items']>([{ name: '', quantity: 1, checked: false }]);

  useEffect(() => {
    reloadData();
  }, []);
  
  const reloadData = async () => {
      const result = await ListItemServices.list();
      setItems(result);
  };

  return (
    <div className="App">
      <div className="App__wrapper">
        <Add reloadData={reloadData} />
        <ListItem items={items} setItems={setItems} reloadData={reloadData} />
      </div>
    </div>
  );
}

export default App;
