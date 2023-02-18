import "./App.css";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Hero from "./component/hero/Hero";
import Products from "./component/products/Products";
import Slider from "./component/slider/Slider";
import Testimonial from "./component/testimonial/Testimonial";
import Virtual from "./component/virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
