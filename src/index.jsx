//React
import React from 'react';
import ReactDOM from 'react-dom';


//Router
import { BrowserRouter as Router, Routes as RoutesList, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Profil from './pages/Profil';
import Setting from './pages/Setting';
import Community from './pages/Community';
import Error from './pages/Error';

//CSS
import "./styles/global/Reset.css";
import "./styles/global/Font.css";
import "./styles/responsive/global.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RoutesList>
        
        {/*Accueil*/}
        <Route path="/" element={<Home/>}></Route>
        
        {/*Profil*/}
        <Route path="/profil" element={<Profil/>}></Route>

        {/*Réglage*/}
        <Route path="/setting" element={<Setting/>}></Route>

        {/*Communauté*/}
        <Route path="/community" element={<Community/>}></Route>

        {/*Erreur*/}
        <Route path="*" element={<Error/>}></Route>
        
      </RoutesList>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);