import { useState } from 'react';

function ShoppingList() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item.trim() !== '') {
      setList([...list, item]);
      setItem('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add item"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {list.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
