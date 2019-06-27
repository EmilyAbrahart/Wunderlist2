import React from 'react';
import './App.css';
import LoginPage from './views/LoginPage';
import TodoPage from './views/TodoPage';
import { Route } from 'react-router-dom';
import PrivateRoute from './authentication/PrivateRoute';
// import styled from 'styled-components';

function App() {
	return (
		<div className="App">
			<Route path="/login" component={LoginPage} />
			<PrivateRoute path="/" component={TodoPage} />
		</div>
	);
}

export default App;
