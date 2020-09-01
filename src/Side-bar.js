import React from 'react';
import { Link } from 'react-router-dom';

export default class SideBar extends React.Component {

    render() {
        console.log(this.props.match.params.folderId)

        let findBar = this.props.foldersAre.find(f => {
            return f.id === this.props.match.params.folderId
        }) || {}


        let theBar = this.props.foldersAre.map(item => {
            return <li key={item.id}><Link to={`/folder/${item.id}`}>{item.name}</Link></li>
        })


        let theNote = this.props.notesAre.map(item => {

            if (item.folderId === this.props.match.params.folderId) {
                return <li key={item.id}><Link to={`/note/${item.id}`}>{item.name}</Link></li>

            }
        })

        return (

            <div>
                <ul>
                    {theBar}
                </ul>
                <div>{findBar.name}</div>
                <ul>
                    {theNote}
                </ul>

            </div>

        )
    }

}