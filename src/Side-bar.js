import React from 'react';
import STORE from './STORE'

export default class sideBar extends React.Component{

    render(){

        let finBar = STORE.folders.find(f => {
          return  f.id === this.props.match.params.folderId
        })


      let theBar = STORE.folders.map(item => {
          return <a href={`/folder/${item.id}`}><li key={item.id}>{item.name}</li></a>
      })
      
    


        return(
        
                <div>
                    <ul>
                    {theBar}
                    </ul>
                </div>
            
        )
    }
}