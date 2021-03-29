import React, { useState } from 'react';
export default function Hello() {
  const [greeting, setGreeting] = useState('hello');
  const toggleGreeting = () => 
    setGreeting(greeting === 'hello' ? 'what\'s up' : 'hello');

  return (
    <div>
      <h3>{greeting} solar system!</h3>
      <button onClick={toggleGreeting}>toggle greeting</button>
    </div>
  )
}