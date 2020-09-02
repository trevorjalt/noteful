import React from 'react'

const NotefulContext = React.createContext({
  // findFolder: () => {},
  // findNote: () => {},
  // getNotesForFolder: () => {},
  // countNotesForFolder: () => {},
  folders:[],
  notes:[],
})

export default NotefulContext