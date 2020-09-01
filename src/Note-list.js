import React from 'react';
import NoteItems from './Note-items';


export default class Notelist extends React.Component{

    render(){
     //console.log(this.props)

     let findNote = this.props.notesAre.find(f => {
        return  f.id === this.props.match.params.noteId
      }) || {}

      console.log(findNote)

    if (this.props.match.params.noteId){
    return(
    <div>
        <h3>{findNote.name}</h3>
        <div>
        <p>{findNote.modified}</p>
        </div>
        <div>
        <p>{findNote.content}</p>
        <button onClick={() => this.props.history.goBack()}>Go Back</button>
        </div>
    
    
    </div>
    )
    }
     
        return(
            <div>
                <ul>

                   <NoteItems
                   foldersAre={this.props.foldersAre}
                   notesAre={this.props.notesAre}
                   />

                </ul>

            </div>
        )
    }
}