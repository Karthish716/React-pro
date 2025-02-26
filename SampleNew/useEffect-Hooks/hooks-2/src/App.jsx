import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [num1, setNum1] = useState(100)
  const [num2, setNum2]= useState(1000)
  useEffect(() => {
    setNum1(200);
    console.log("from effect");
  }, []);


  console.log("num1", num1);
  return (
  
    <div>
      <h1>{num1}</h1>
      {/* <button onClick={
        () => setNum1((curr) => {
        return curr+1;
      }
        )
        }>Add</button> */}

      <button onClick={() => setNum1((curr) => curr+1)}>Add</button>
      <h1>{num2}</h1>
      <button onClick={() => setNum2((curr) => curr+1)}>Add</button>
    </div>
  );
};

export default App;


