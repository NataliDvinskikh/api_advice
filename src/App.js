
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const [advice, setAdvice] = useState('');

useEffect(()=> {
  getAdvice();
},[]);

const getAdvice = async() => {
  const response = await fetch(`https://www.boredapi.com/api/activity/ `);
  const data = await response.json();
  setAdvice(data.activity);
}

  return (
    <div className="App">
      <div className='container'>
        <h1>{advice}</h1>

        <button className='btn' onClick={getAdvice}>Dispel Boredom</button>
      </div>
    </div>
  );
}

export default App;
