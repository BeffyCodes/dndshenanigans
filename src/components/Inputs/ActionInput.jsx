import React from 'react';
import { Link } from 'react-router-dom';
// import { search } from '../BooksAPI'
// import Book from './Book'

class ActionInput extends React.Component {
    state = {
    }

    render() {

        return (
            <div className="create-form">
            <input type="text" name="monsterName" />
            </div>
        )
    }
}

export default ActionInput;
