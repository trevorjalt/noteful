import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NotefulContext from '../App/NotefulContext'
import './Note.css'

export default class Note extends React.Component {
  
  static contextType = NotefulContext
  

  render (){

    return (
      <NotefulContext.Consumer>
      
      <div className='Note'>
        <h2 className='Note__title'>
          <Link to={`/note/${this.context.notes.id}`}>
            {this.context.notes.name}
          </Link>
        </h2>
        <button className='Note__delete' type='button'>
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          remove
        </button>
        <div className='Note__dates'>
          <div className='Note__dates-modified'>
            Modified
            {' '}
            <span className='Date'>
              {format(this.context.notes.modified, 'Do MMM YYYY')}
            </span>
          </div>
        </div>
      </div>
     
      </NotefulContext.Consumer>
    )

  }
  
}
