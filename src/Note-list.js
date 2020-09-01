import React from 'react';
import NoteItems from './Note-items';
import noteItems from './Note-items';


export default class noteList extends React.Component{

    render(){
        return(
            <div>
                <ul>

                   <noteItems/>

                </ul>

            </div>
        )
    }
}