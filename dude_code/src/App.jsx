import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Body/hero';
import Dude from './Components/Dude Code Do/Dude';
import Card from "./Components/Pages/Card"

function App() {
  return (
    <div className="App">
      <NavBar page="Home" />
      <Hero />
      <br></br>
      <br></br>
      <Dude />
      <br></br>
      <br></br> <br></br>
      <br></br>
      <Card />

    </div>
  );
}

export default App;
