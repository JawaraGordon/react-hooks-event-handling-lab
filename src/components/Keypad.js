// Code Keypad Component Here
import React, { useState } from 'react';

function Keypad() {
  const [password, setPassword] = useState('');
  const enterPassword = () => {
    console.log('Entering password...');
  };
  return (
    <div>
      <input
        onChange={enterPassword}
        type="password"
        name="search"
        // onChange={handleChange}
        placeholder="Enter Password"
      />
    </div>
  );
}

export default Keypad;
