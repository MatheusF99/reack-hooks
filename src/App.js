import React, {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [horizontal, setHorizontal] = useState(0)
  const [vertical, setVertical] = useState(0)

  useEffect(() => {
    document.title = `clique (${horizontal})`
  }, [horizontal])

  
  function handleIncrementHorizontal(){
    setHorizontal(horizontal + 10 )
  }

  function handleDencrementHorizontal(){
    setHorizontal(horizontal - 10 )
  }

  function handleIncrementVertical(){
    setVertical(vertical + 10 )
  }

  function handleDencrementVertical(){
    setVertical(vertical - 10 )
  }

  return (
    <div className="App" style={{ top: horizontal, left: vertical }}>
      <button onClick={handleDencrementHorizontal} >-</button>
      <div className="vertical">
        <button onClick={handleDencrementVertical} >-</button>
          <p> ({horizontal})({vertical }) </p>
        <button onClick={handleIncrementVertical} >+</button>        
      </div>
      <button onClick={handleIncrementHorizontal} >+</button>
    </div>
  );
}

export default App;
