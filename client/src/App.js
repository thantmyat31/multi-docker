import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<Link className="Nav-Link" to="/">
						Home
					</Link>
					<Link className="Nav-Link" to="/other">
						Other Page
					</Link>
				</header>
				<div>
					<Route exact path="/" component={Fib} />
					<Route path="/other" component={OtherPage} />
				</div>
			</div>
		</Router>
	);
}

export default App;
