import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Home, About, History, Contact } from './container';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <History />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
