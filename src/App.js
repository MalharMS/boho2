import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Brands from './components/Brands';
import Foter from './components/Fo.jsx'
function App() {
  return (
    <div className="App">
      <Menu />
      <Brands />
      <Foter />
    </div>
  );
}

export default App;
