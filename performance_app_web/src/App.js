import './App.css';
import { Route, Routes } from 'react-router';
import Login from './containers/login';
import Dashboard from './containers/dashboard';
import Details from './containers/details';
import { useEffect } from 'react';
import WebFont from 'webfontloader';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Lobster','Oswald','Montserrat']
      }
    });
   }, []);
  return (
    <Routes>
      <Route path='/' exact element = {<Login/>}/>
      <Route path='/dashboard' exact element = {<Dashboard/>}/>
      <Route path='/details' exact element = {<Details/>}/>
    </Routes>
  );
}

export default App;
