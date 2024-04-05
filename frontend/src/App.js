import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './pages/home';
import NavBar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<div className='App'>
				<NavBar />
				<Header />
				<Homepage />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
