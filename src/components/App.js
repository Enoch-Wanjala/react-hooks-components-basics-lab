import React from "react";
import Home from "./Home"
import NavBar from "./Navbar"
import About from "./About"

{/* write an <About> component here */}


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      {/* add the <Home> component here */}
      {/* add your <About> component here */}
    </div>
  );
}

export default App;
