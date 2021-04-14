import React from 'react';
import {Link} from "react-router-dom";

import * as BooksAPI from '../BooksAPI'

import BookShelf from "./BookShelf";

export default class ShelvesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log("constructor")
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => this.setState({books: books}));
    }

    handleUpdate = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() =>
            BooksAPI.getAll().then(books => this.setState({books: books}))
        );
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf title="Currently Reading"
                                   books={this.state.books?.filter(book => book.shelf === "currentlyReading")}
                                   updateHandler={this.handleUpdate}/>
                        <BookShelf title="Want to Read"
                                   books={this.state.books?.filter(book => book.shelf === "wantToRead")}
                                   updateHandler={this.handleUpdate}/>
                        <BookShelf title="Read"
                                   books={this.state.books?.filter(book => book.shelf === "read")}
                                   updateHandler={this.handleUpdate}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}