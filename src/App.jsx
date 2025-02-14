import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/register';
import TodoForm from  './components/TodoForm';

function App() {
  return (
    <div className="App">
      <Login /> 
      {/* <Register />  */}
     {/* {<TodoForm /> } */}
    </div>
  );
}

export default App;