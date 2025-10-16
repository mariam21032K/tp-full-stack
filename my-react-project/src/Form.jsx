import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');

  const handleClick = () => {
    if (name.trim() !== '') {
      alert(`Hello, ${name}!`);
    } else {
      alert('Please enter a name.');
    }
  };

  return (
    <div >
      <h2>Form Example</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick} >
        Say Hello
      </button>
    </div>
  );
}

export default Form;
