import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavBar />
        <Header />
        <Homepage /> */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
