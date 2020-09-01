import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header'
import Sidebar from './Side-bar'
import Notelist from './Note-list'
import STORE from './STORE'
import './App.css';
import noteList from './Note-list';

class App extends React.Component {
    state={
      folders:[],
      notes:[]
    }
  
    componentDidMount(){
      setTimeout(()=> {
        this.setState({
          folders: STORE.folders,
          notes: STORE.notes
        })
      }, 300)
    }


  render(){
  return (
    <div className="App">
      <Header/>
      <main>
      <Route
          exact path='/'
          render={ 
            (routeprops) => <Sidebar 
              {...routeprops}
              foldersAre={this.state.folders}
              notesAre={this.state.notes}
            />
          }
          />
      <Route 
          exact path='/'
          render={ 
            (routeprops) => <Notelist 
              {...routeprops}
              foldersAre={this.state.folders}
              notesAre={this.state.notes}
            />
          }     
      /> 
      <Route
        exact path= '/folder/:folderId'
        render={ 
          (routeprops) => <Sidebar 
            {...routeprops}
            foldersAre={this.state.folders}
            notesAre={this.state.notes}
          />
        }
      />
      <Route 
        exact path ='/note/:noteId'
        render={ 
          (routeprops) => <Notelist 
            {...routeprops}
            foldersAre={this.state.folders}
            notesAre={this.state.notes}
          />
        }
      />


      </main>
    </div>
  );
  }
}

export default App;
