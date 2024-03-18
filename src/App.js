
import './App.css';

import {useState,useMemo} from 'react';
import Header from './components/Header';

function App() {
  const [number, setNumber] = useState(0);

  const data = useMemo(() => {
    return calculateObject();
    //Arrayler icinde kullanilabilir
  },[]);
  return (
    <div className="App">
      <Header  data={data}/>
     <h1>{number}</h1>
     <button onClick={() => setNumber(number + 1 )}>Click</button>
    </div>
  );
}

function calculateObject() {
  console.log("Calculating..");
  for(let i = 0;i<100000;i++){

  }
  console.log("Calculating complated");
  return {name:"Kahya"};
}

export default App;
