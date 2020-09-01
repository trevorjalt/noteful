import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header'
import Sidebar from './Side-bar'
import Notelist from './Note-list'
import './App.css';

function App() {
  
  
  
  return (
    <div className="App">
      <Header/>
      <main>
      <Route
          exact path='/'
          component={Sidebar}
         />
      <Route 
          exact path='/'
          component={Notelist}      
      /> 
      <Route
        path= '/folder/:folderId'
        componet={Sidebar}
      />
          
      </main>
    </div>
  );
}

export default App;
