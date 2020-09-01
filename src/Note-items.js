import React from 'react';
import { Link } from 'react-router-dom';

export default class noteItems extends React.Component{

    render(){
          

        
          //console.log(findNote)

        
        const noteList= this.props.notesAre.map(note=> {
            return <li key={note.id}>
                <Link to={`/note/${note.id}`}><h3>{note.name} </h3></Link>
                <div>
                <p>{note.modified}</p>

                </div>
                
                </li>
        })

        return(
            <>
                {noteList}
            </>
        )
    
        }
}