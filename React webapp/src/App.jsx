import './App.css'
import Navbar from './Navbar/Navbar';
import Products from './products';
import About from './About';
import Footer from './Footer';
import PORT from './assets/port.png';
import MINI from './assets/mini.webp';
import BUISS from './assets/Buiss.jpg';

function App() {
  return (
    <>
    <Navbar/>
    <About/>
    <Products name="Portfolio Website" abt="Showcase Yourself" price="$200" img={PORT} login = {true}/>
    <Products name="Mini Project" abt="Showcase Yourself" price="$500 - $1000" img={MINI} login = {true}/>
    <Products name="Buisness Website" abt="Showcase Yourself" price="$1000 - $2000" img={BUISS}/>
    <Footer/>
    </>
  );
}

export default App
