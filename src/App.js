
import './App.css';
import Header from '../src/components/Header';
import HeroCompoenent from './components/HeroComponent';
import AboutUs from './components/AboutUs';
import ServiceComponent from './components/ServiceComponent';

function App() {
  return (
    <div className="App">
     <Header />
     <HeroCompoenent />
     <AboutUs />
     <ServiceComponent />
    </div>
  );
}

export default App;
