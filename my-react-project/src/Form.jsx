import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');

  const handleClick = () => {
    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Greet</button>
    </div>
  );
}

export default Form;
