import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.css'

import ShelvesPage from "./components/ShelvesPage";
import SearchPage from "./components/SearchPage";

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
