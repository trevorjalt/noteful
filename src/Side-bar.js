import React from 'react';


export default class SideBar extends React.Component{

    render(){
        console.log(this.props.match.params)
        let findBar = this.props.foldersAre.find(f => {
          return  f.id === this.props.match.params.folderId
        }) || {}
        console.log(findBar)


      let theBar = this.props.foldersAre.map(item => {
          return <li key={item.id}><a href={`/folder/${item.id}`}>{item.name}</a></li>
      })
      
    


        return(
        
                <div>
                    <ul>
                    {theBar}
                    </ul>
        <div>{findBar.name}</div>
                </div>
            
        )
    }
}