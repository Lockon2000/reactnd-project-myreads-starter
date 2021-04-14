import React from 'react';
import {Link} from "react-router-dom";

import * as BooksAPI from "../BooksAPI";

import Book from "./Book";


export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchString: ''};
    }

    handleChange = (event) => {
        if (event.target.value) {
            BooksAPI.search(event.target.value).then(res => {
                if (res instanceof Array) {
                    this.setState({books: res})
                }
            });
        }
        this.setState({searchString: event.target.value});
    }

    getBookShelf(searchedBook) {
        const filteredBooks = this.props.books?.filter(book => book.id === searchedBook.id);

        return filteredBooks[0]?.shelf ?? "none";
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                          NOTES: The search from BooksAPI is limited to a particular set of search terms.
                          You can find these search terms here:
                          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                          you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author" value={this.state.searchString}
                               onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books?.map(book =>
                            <li key={book.id}>
                                <Book reference={book} title={book.title} author={book.author}
                                      shelf={this.getBookShelf(book)} style={{
                                    backgroundImage: `url("${book.imageLinks.smallThumbnail}")`
                                }} handleShelfUpdate={this.props.handleShelfUpdate}/>
                            </li>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}