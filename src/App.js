
import './App.css';
import Header from '../src/components/Header';
import HeroCompoenent from './components/HeroComponent';
import AboutUs from './components/AboutUs';
import ServiceComponent from './components/ServiceComponent';
import TeamComponent from './components/_TeamComponent';
import ProjectComponent from './components/ProjectComponent';
import ClientComponent from './components/ClientComponent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <HeroCompoenent />
     <AboutUs />
     <ServiceComponent />
     <TeamComponent />
     <ProjectComponent />
     <ClientComponent />
     <Footer />
    </div>
  );
}

export default App;
