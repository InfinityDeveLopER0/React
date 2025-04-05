import './App.css'
import Navbar from './Navbar/Navbar';
import Products from './products';
import CourseList from './CourseList';
import About from './About';
import Footer from './Footer';

import BUISS from './assets/Buiss.jpg';

function App() {
  return (
    <>
    <Navbar/>
    <About/>
    <CourseList/>
    <Products name="Buisness Website" abt="Showcase Yourself" price="$1000 - $2000" img={BUISS}/>
    <Footer/>
    </>
  );
}

export default App
