import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import * as BooksAPI from './BooksAPI'
import './App.css'

import ShelvesPage from "./components/shelvesPage";
import SearchPage from "./components/searchPage";

class BooksApp extends React.Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <Switch>
                        <Route path="/search" component={SearchPage}/>
                        <Route path="/" component={ShelvesPage}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default BooksApp
