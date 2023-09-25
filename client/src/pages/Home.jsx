import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Continent from "../components/Continent/Continent";
import FooterHome from "../components/FooterHome/FooterHome";
import Cards from "../components/Cards/Card";
import { useSelector, useDispatch } from "react-redux";
import { AllPostTuristic } from "../redux/action";


function Home() {

 

  return (
    <div >
    <Header />
      <Continent />
      <div >
        <Cards />
      
      </div>
      <div >

      <FooterHome />
      </div>
    </div>
  );
}

export default Home;
