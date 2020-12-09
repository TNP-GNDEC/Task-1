import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from "./Nav"
import Posts from "./Posts";
import AddPosts from "./AddPosts";
import EditPost from "./EditPost";

function Example() {
    return (
        <Router>
        <>
            <Nav />
            <div className="container mt-5">
                <div className = "row">
                    <div className = "col-md-10">
                    <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/addPost" exact component={AddPosts} />
                    <Route path="/edit/:id" exact component={EditPost} />
                    </Switch>

                    </div>
                </div>
            </div>
            
        </>
        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
