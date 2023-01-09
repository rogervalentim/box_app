import './App.css';
import Navbar from './components/Navbar';
import { Home, About } from './container';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
