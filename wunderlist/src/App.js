import React from 'react';
import './App.css';
import LoginPage from './views/LoginPage';
import TodoPage from './views/TodoPage';
import { Route, Redirect } from 'react-router-dom';
import PrivateRoute from './authentication/PrivateRoute';
// import styled from 'styled-components';

function App() {
	return (
		<div className="App">
			<Route
				path="/login"
				render={() => {
					if (!localStorage.getItem('token')) {
						return <LoginPage />;
					}
					return <Redirect exact to="/" />;
				}}
			/>

			<PrivateRoute path="/" component={TodoPage} />
		</div>
	);
}

export default App;
