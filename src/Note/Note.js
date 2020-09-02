import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Note.css'
import NotefulContext from '../App/NotefulContext'
// import {findNote} from '../notes-helpers'

export default class Note extends React.Component {
    static defaultProps={
      onDeleteNote: () => {} 
    }

    static contextType = NotefulContext

     
   handleClickDelete = (e) => {
    e.preventDefault()
    const noteId= this.props.id
    let baseUrl = `http://localhost:9090/notes/${this.props.id}`

    fetch (baseUrl,  {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(() =>{
      console.log(this.props)
      this.context.deleteNote(noteId)
      this.props.onDeleteNote(noteId)
      // this.props
    })
  }



  render () {
    // console.log(this.props)
    // console.log(this.context)
    // const {notes} = this.context
    // const noteId = this.props.match.params.noteId
    // const note = findNote(notes, noteId) || {}
    //console.log(this.props.id)
 


    return (
      <div className='Note'>
        <h2 className='Note__title'>
          <Link to={`/note/${this.props.id}`}>
            {this.props.name}
          </Link>
        </h2>
        <button
         className='Note__delete' 
         type='button'
         onClick={this.handleClickDelete}
         >
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          remove
        </button>
        <div className='Note__dates'>
          <div className='Note__dates-modified'>
            Modified
            {' '}
            <span className='Date'>
              {format(this.props.modified, 'Do MMM YYYY')}
            </span>
          </div>
        </div>
      </div>
    )
  }
}