import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar';
import Course from './Course';
import Footer from './Footer';
import pic from './assets/tower.jpg'
import day from './assets/dayla.jpg'
import night from './assets/nightVag.jpg'
import React from "react";

function App() {

  return (
    <>
    <Course name="HTML" price="$199" image={pic}/>
    <Course name="CSS" price="$199" image={day} show={true} />
    <Course name="Js" price="$499" image={night}/>
    </>
  );
}

export default App
