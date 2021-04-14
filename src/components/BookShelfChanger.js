import React from 'react';

export default class BookShelfChanger extends React.Component {
    handleChange = (evt) => {
        this.props.updateHandler(this.props.book, evt.target.value);
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={this.handleChange} value={this.props.book?.shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}