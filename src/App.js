import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';
import Index from './components/index';
import Resume from './components/Resume';
import Contacts from './components/Contacts';
import Skills from './components/Skills';
import Education from './components/Education';
import  Startup from './components/Startup';
import  HomeContract from './components/HomeContract';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Index} />
     
      <Route path="/Education" component={Education} />
      <Route path="/Skills" component={Skills} />
      <Route path="/Resume" component={Resume} />
      <Route path="/Startup" component={Startup} />

      <Route path="/contacts" component={Contacts} />
      <Route path="/HomeContract" component={ HomeContract} />
    </>
  );
}

export default App;
