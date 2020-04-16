import React, {useState, useEffect} from "react";
import "./App.css";

//Reactstrap Impors
import {Alert} from "reactstrap";
import {Container, Row, Col} from "reactstrap";

//Component Imports
import Header from "./components/Header";
import Image from "./components/Image";
import Info from "./components/Info";
import Footer from "./components/footer";
import Columns from "./components/styles/Columns";
import Navigation from "./components/styles/Navbar";

//Style Imports
import HeaderStyle from "./components/styles/HeaderStyling";
import BodyStyling from "./components/styles/BodyStyling";

import axios from "axios";

const url = "https://api.nasa.gov/planetary/apod";
const api_key = "4h3uoSzqgdqfMotMoqO6SyZqle2CyhDuUFfoOGCc";

function App() {
  const [nasaData, setNasaData] = useState([]);
  const [newPage, setNewPage] = useState([]);

  useEffect(() => {
    axios.get(`${url}?api_key=${api_key}`).then(res => {
      console.log(res);
      setNasaData(res.data);
    });
  }, []);

  return (
    <div className="App">
      <BodyStyling>
        <Navigation />

        <HeaderStyle>
          <Header title={nasaData.title} date={nasaData.date}></Header>
        </HeaderStyle>
        <Image url={nasaData.url} />

        <div className="Info">
          <Info explanation={nasaData.explanation} />
        </div>
      </BodyStyling>

      <div>
        <Columns />
      </div>
      <Footer />
    </div>
  );
}

export default App;
