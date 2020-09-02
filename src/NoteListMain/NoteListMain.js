import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../Note/Note'
import CircleButton from '../CircleButton/CircleButton'
import NotefulContext from '../App/NotefulContext'
import './NoteListMain.css'

export default class NoteListMain extends React.Component {
  
  // static contextType = NotefulContext

  render() {
    
    return (
      <NotefulContext.Consumer>
        

        <section className='NoteListMain'>
          <ul>
            {this.context.notes.map(note =>
              <li key={note.id}>
                <Note
                  
                />
              </li>
            )}
          </ul>
          <div className='NoteListMain__button-container'>
            <CircleButton
              tag={Link}
              to='/add-note'
              type='button'
              className='NoteListMain__add-note-button'
            >
              <FontAwesomeIcon icon='plus' />
              <br />
              Note
            </CircleButton>
          </div>
        </section>
      </NotefulContext.Consumer>
    )
  }



  }

 
// NoteListMain.defaultProps = {
//   notes: [],

