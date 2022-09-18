import React, {useState} from 'react';
import Tweet from './Tweet';

function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "John",
    age: 25,
    posts: ['my first post']
  });
  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className='app'>
      <h1 className={isRed ? "red" : ""}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <Tweet name="Dev Ed" likes="45"/>
      <Tweet name="Dev John" likes="2"/>
      <Tweet name="Dev Nik" likes="17"/>
      <Tweet name="Dev Snowy" likes="88"/>
    </div>
  );
}

export default App;
