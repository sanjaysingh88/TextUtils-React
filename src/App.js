import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
//import About from './components/About';
import Alert from './components/Alert';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light ') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert('Dark mode has been enabled ', ' success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('light mode has been enabled ', ' success');
    }
  };
  return (
    <>
      {/*<Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/*<Router>
       */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
            <Route exact path="/about" element={<About />} />

            <Route
              exact
              path="/"
              element={   */}
        <TextForm
          showAlert={showAlert}
          heading="Enter text to analyze below"
          mode={mode}
        />
        {/*  }
            />
         </Routes>
          */}
      </div>
      {/*  </Router>
       */}
      {/* <About />*/}
    </>
  );
}

export default App;
