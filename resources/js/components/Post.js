import React from 'react';
import axios from 'axios' 
import {Link} from "react-router-dom"
import "./app.css"

class Post extends React.Component {
    delpost = (id) => {
        this.props.deletepost(id);
    }
    render(){
        const {posts} = this.props;
        
        return(
            <div className="card mb-5">
                <div className="card-Header">
                    
                    <div className="col-md-8">
                        <h2>{posts.title}</h2>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                            <h5></h5>
                        </div>

                        <div className="col-md-6">
                            <h5> Created at: {posts.updated_at}</h5>
                        </div>
                        <div className="col-md-3">
                            <h5> Type: {posts.Announcements}</h5>
                        </div>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                                <h4>{posts.description}</h4>
                            </div>
                        </div>
                        <div>
                            <hr />
                        </div>
                        
                        <div className="row">
                        
                        <div className="col-md-2">
                            <Link className="btn btn-warning" to={`/edit/${posts.id}`}>
                                Edit
                            </Link>
                        </div>
                        <div className="col-md-2">
                        <button className="btn btn-danger" onClick={() => this.delpost(posts.id)}>
                                Delete
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                
            </div>
        )
    }
}

export default Post;
