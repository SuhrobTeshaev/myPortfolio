import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Footer from './components/Footer/footer';
import NavBar from './components/navbar/navbar';
import './style/reset.css';
import './style/main.css'
import Home from './pages/home';
import Projects from './pages/projects';
import Contacts from './pages/contacts';
import Project1 from './pages/projet1';
import ScrollToTop from './components/utils/scrollToTop';

function App() {
	return (
		<div className="App">
			<Router>
				<ScrollToTop/>
			<NavBar />
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/projects' element={<Projects/>}/>
					<Route path='/project1/:id' element={<Project1/>}/>
					<Route path='/contacts' element={<Contacts/>}/>

				</Routes>
				<Footer />
			</Router>
			
			
			
		</div>
	);
}

export default App;
