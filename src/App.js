import './App.css';
import About from './Component/About/About';
import Header from './Component/Header/Header';
import Slider from './Component/Slider/Slider';
import Blog from './Component/Blog/Blog';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Testimonials from './Component/Testimonials/Testimonials';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Slider />
      <Testimonials></Testimonials>
      <Blog />
      <Footer />
    </>
  );
}

export default App;
