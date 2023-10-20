import React, {useState} from 'react';


function countInitial(){
  return 4
}

function App() {

  const [count, setCount] = useState(() => countInitial());
  const [theme, setTheme] = useState('Blue');

  // const [state, setState] = useState({count: 4, theme: 'blue'}) 
  // const count = state.count
  // const theme = state.theme

  
  // function decrementCount(){
  //   //setCount(prevCount =>  prevCount - 1)
  //   setState(prevState =>  {
  //     return { ...prevState, count: prevState.count - 1}
  //   })    
  // }

  function decrementCount(){
    setCount(prevCount =>  prevCount - 1)
    setTheme('Blue');
  }

  function incrementCount(){
    setCount(prevCount =>  prevCount + 1)
    setTheme('Red');
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count} </span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
