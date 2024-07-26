import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';


function App() {

   // Dark mode State
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#232523';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }

  }

  // Dark mode State
  const [mode, setMode] = useState('light')  // Whether dark mode is enabled or not

  // Alert State
  const [alert, setAlert] = useState("", "")

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    // setTimeout for Auto-dismissing Alert 
    setTimeout(() => {
      setAlert("", "");
    }, 1500);
  } 
  return (
    <>
    {/* Passing Props */}
    <Navbar navTitle="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode}></Navbar>

    {/* Alert */}
    <Alert alert={alert}></Alert>
    {/* TextForm */}
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode} showAlert={showAlert}></TextForm>
    </div>

    {/* About */}
    {/* <About></About> */}
    </>
  );
}

export default App;
