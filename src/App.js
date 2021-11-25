
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react'; //imrs
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setDarkMode] = useState('white');
  const [text, setTextColor] = useState('dark');
  const [alert, setAlert] = useState(null); //we are passing an object here

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setDarkMode('white');
      setTextColor('dark');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light Mode Enabled", "danger");

      //THIS IS USED TO TOGGLE THE TITLE AFTER EACH INTERVAL

      document.title = "My APP";
      setInterval(() => {
        document.title = "Welcome";
      }, 2000);
      setInterval(() => {
        document.title = "Get Started";
      }, 1500);

    }
    else {
      setDarkMode('dark');
      setTextColor('white');
      document.body.style.backgroundColor = '#000';
      showAlert("Dark Mode Enabled", "warning");
    }
  }

  const RedMode = () => {
    if (mode === 'white') {
      setDarkMode('red');
      setTextColor('dark');
      document.body.style.backgroundColor = '#ff8d85';
      showAlert("Red Mode Enabled", "danger");
    }
    else {
      setDarkMode('white');
      setTextColor('dark');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light Mode Enabled", "danger");
    }
  }

  const BlueMode = () => {
    if (mode === 'white') {
      setDarkMode('blue');
      setTextColor('dark');
      document.body.style.backgroundColor = '#8593ff';
      showAlert("Blue Mode Enabled", "danger");
    }
    else {
      setDarkMode('white');
      setTextColor('dark');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light Mode Enabled", "danger");
    }
  }

  const GreenMode = () => {
    if (mode === 'white') {
      setDarkMode('green');
      setTextColor('dark');
      document.body.style.backgroundColor = '#85ff97';
      showAlert("Green Mode Enabled", "danger");

    }
    else {
      setDarkMode('white');
      setTextColor('dark');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light Mode Enabled", "danger");
    }
  }

  return (
    <>
      <Router>
        <Navbar about="About my Love Story" mode={mode} text={text} RedMode={RedMode} GreenMode={GreenMode} BlueMode={BlueMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='my-3'>
          <Switch>
            <Route exact path="/about">
              <About mode={mode} toggleMode={toggleMode}/>
            </Route>
            <Route exact path="/">
              <TextForm heading="This is my new Heading" mode={mode} text={text} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}



export default App;
