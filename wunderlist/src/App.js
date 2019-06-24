import React from 'react';
import './App.css';
import LoginPage from './components/public-pages/LoginPage';
import TodoPage from './components/private-pages/TodoPage';
import {Route} from 'react-router-dom';
import PrivateRoute from './authentication/PrivateRoute';


function App() {
  return (
    <div className="App">
     <Route path="/login" component={LoginPage} />
     <PrivateRoute exact path="/" component={TodoPage} />
    </div>
  );
}

export default App;
