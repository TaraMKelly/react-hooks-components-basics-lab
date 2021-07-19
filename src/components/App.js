import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// The <About> component should return a <div> with an id of about. The div can also optionally have some additional text content and other elements inside 
function About() {
  return (
    <div id="about">
      <h1>About me</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      {/* write an <About> component here */}
    </div>
  );
}

export default App;
