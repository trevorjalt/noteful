import React from 'react';
import STORE from './STORE';

export default class noteItems extends React.Component{

    render(
        const noteList= STORE.notes.map(note=> {
            return <li key={note.id}>{note.name}> </li>
        })

        return(
            <>
                {noteList}
            </>
        )
    )
    
}