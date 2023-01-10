import './App.css';
import Navbar from './components/Navbar';
import { Home, About, History } from './container';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <History />
    </div>
  );
}

export default App;
