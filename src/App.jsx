import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Form from './Components/Form';
import DisplayData from './Components/DisplayData';

function App() {
  return (
    <div>
      <div className="header">
      <h1>User Registration</h1>
      </div>
      <Form />
      <DisplayData />
    </div>
  );
}

export default App;
