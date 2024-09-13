import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListHospComponent from './components/ListHospComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateHospComponent from './components/CreateHospComponent';
import ViewHospComponent from './components/ViewHospComponent';
import Container from './components/Container';
import patientBg from './assets/redd-f-gdQnsMbhkUs-unsplash.jpg'

function App() {

  return (
    <div className='custom-bg' style={{ height: '100vh', backgroundImage: `url(${patientBg})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
        <Router>
          <HeaderComponent />
          <div className={(window.location.pathname !== '/') && 'container'} >
            <Switch>
              <Route path = "/patients" component = {ListHospComponent}></Route>
              <Route path = "/add-patient/:id" component = {CreateHospComponent}></Route>
            <Route path="/view-patient/:id" component={ViewHospComponent}></Route>
            <div className='cfb mt-5 vw-100' style={{height: "700px"}}>
              <Route path = "/" component = {Container} />
            </div>
            </Switch>
          </div>
        </Router>
    </div>
    
  );
}

export default App;
