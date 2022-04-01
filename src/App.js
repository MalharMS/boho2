import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/Carousel';
import Brands from './components/Brands';
function App() {
  return (
    <div className="App">
      <Menu />
      <Slider />
      <Brands />
      <div className="slidergrp-row1">
        <Slider />
        <Slider />
      </div>
      <div className="slidergrp-row2">
        <Slider />
        <Slider />
      </div>
    </div>
  );
}

export default App;
