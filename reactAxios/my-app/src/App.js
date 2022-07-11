import './App.css';
import { useState } from 'react';
import axios from 'axios';



function App() {
  const [data , setData]  = useState('')
  const getQuote = () => {
    axios.get('https://api.spacexdata.com/v4/roadster')
    .then(response => {
      console.log(response.data.name)
      setData(response.data.name)
    }).catch(error => {
      console.log(error)
    })
  }
  return (
    <div className="App">
      <button onClick={getQuote}>Get Quote</button>
      {data && <p>{data}</p>}
    </div>
    
  );
}

export default App;
