import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Characters from './components/Characters'
import Loader from 'react-loader-spinner'

const App = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
    .get('https://swapi.co/api/people/?page=2')
    .then(res => {
        setCharacter(res.data.results)
        console.log('response', res)
        
    })
  },[])
  
  if(!character){
    return (
      <Loader 
      type="Puff"
      color="#00BFFF"
      height="100"	
      width="100"
   />   
    )
  }else{

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {character.map((chars, index) =><Characters name={chars.name} height={chars.height} gender={chars.gender} key={index} />)}
      </div>
    );

  }

  
}

export default App;
