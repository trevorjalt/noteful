import React from 'react';
import STORE from './STORE';

export default class noteItems extends React.Component{

    render(){
        const noteList= STORE.notes.map(note=> {
            return <li key={note.id}>
                <h3>{note.name} </h3>
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