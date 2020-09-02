import React from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'
import NotefulContext from '../App/NotefulContext';

export default class NotePageMain extends React.Component {
  static contextType = NotefulContext
  
  render () {
    const {notes} = this.context
    console.log(this.props.match.params.noteId)
    const note = notes.find(n => n.id === this.props.match.params.noteId) || {} 
    console.log(this.context)
    return (
      <section className='NotePageMain'>
        <Note
          id={note.id}
          name={note.name}
          modified={note.modified}
        />
        <div className='NotePageMain__content'>
          {note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
}

// NotePageMain.defaultProps = {
//   note: {
//     content: '',
//   }
// }
