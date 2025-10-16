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
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>Shopping List</h2>
      <input
        type="text"
        placeholder="Add an item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addItem} style={{ marginLeft: '10px' }}>
        Add
      </button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {list.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
