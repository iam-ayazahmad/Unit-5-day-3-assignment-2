
import { useState } from 'react';
import './App.css';
import { Category } from './components/Category';

function App() {

  const [counter,setCounter]=useState(1)

  return (

    <div className='app'>
      <h2 className={`${counter%2==0 ? "green":"red"}`}>Counter : {counter}</h2>

      <button onClick={()=>{
        setCounter(counter+1)
      }}>Increment</button>


      <button onClick={()=>{
        setCounter(counter-1)
      }}>Decrement</button>


      <button onClick={()=>{
        setCounter(counter*2)
      }}>Double</button>

    </div>

    

    

  );
}

export default App;
