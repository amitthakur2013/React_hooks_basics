import React,{ useState,useEffect } from 'react';

function App() {
  const [state,setState]=useState({count:4,theme:'blue'});

  useEffect(() => {
    console.log('Render')
  },[])

  function decrementCount() {
    setState(prevState => {
      return {...prevState,count:prevState.count - 1}
    })
  }

  function incrementCount() {
    setState(prevState => {
      return {...prevState,count:prevState.count + 1}
    })
  }
  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{state.count}{state.theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}


export default App;
