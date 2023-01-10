import './App.css';
import Navbar from './components/Navbar';
import { Home, About, History, Contact } from './container';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <History />
      <Contact />
    </div>
  );
}

export default App;
