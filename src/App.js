import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './components/Header';
import Image from './components/Image';
import Info from './components/Info'

import axios from 'axios'

const url = 'https://api.nasa.gov/planetary/apod'
const api_key = '4h3uoSzqgdqfMotMoqO6SyZqle2CyhDuUFfoOGCc'




function App() {
const [nasaData, setNasaData] = useState([])
const [newPage, setNewPage] = useState([])

useEffect(() => {
  axios.get(`${url}?api_key=${api_key}`)
    .then(res =>{
      console.log(res)
      setNasaData(res.data);
    })
}, []);







  return (
    <div className="App">
      <Header title={nasaData.title} date={nasaData.date}/>
      <Image url={nasaData.url}/>

    <div className='Info'>
        <Info explanation={nasaData.explanation}/>

    </div>

      </div>
  );
}

export default App;
