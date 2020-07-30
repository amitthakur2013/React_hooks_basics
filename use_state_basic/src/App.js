import React,{ useState,useEffect,useMemo,useRef } from 'react';

/*function App() {
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
}*/

/*function App() {
  const [windowWidth,setwindowWidth]=useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize',handleResize)

    return () => {
      window.removeEventListener('resize',handleResize)
    }
  },[])

  const handleResize = () => {
    setwindowWidth(window.innerWidth)
  }
  return (
    <div className="App">
      {windowWidth}
    </div>
  );
}*/

/* useMemo */
/*
function App() {
  function slow(num) {
    console.log('Calling slow function...!');
    for(let i=0;i<1000000000;i++) {}
    return num*2;
  }

  const [number,setNumber] = useState(0);
  const [dark,setDark] = useState(false);
  const doubleNumber=useMemo(() => {
    return slow(number);
  },[number])
  const themeStyles = {
    backgroundColor: dark ? 'black':'white',
    color: dark ? 'white': 'black'
  }
  

  return (
    <div className="App">
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={()=>setDark(prevDark=>!prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}
*/

/*useRef*/

function App() {
  const [name,setName]=useState('');
  const renderCount=useRef(0);

  useEffect(()=>{
    renderCount.current=renderCount.current + 1;
  })

  return (
    <div className="App">
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
    </div>
  );
}

export default App;
