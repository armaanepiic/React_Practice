// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import BioData from "./components/Biodata"
import List from "./components/List"

function App() {
  
  return <div className="App">
    
    <BioData 
      name="Arman Hossain"
      age={26}
      mobile="01874015451"
      skills={["C++", "JS", "React", "Python"]}
      interests={["Travelling","Swimming", "Learning"]}
    />
    <hr />
    <BioData 
      name="Nusratun Nabi"
      age={24}
      skills={["Figma", "Canva", "Web-Design"]}
      interests={["Cooking","Travelling", "Reading"]}
    />
    <List />
  </div>
  
};

export default App
/*

* A component must fulfill 3 criteria
  1) Component must be a function
  2) A component must return "something"
  3) That "something" must be some html type code (jsx)

*/
