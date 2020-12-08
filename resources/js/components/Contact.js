import { Button } from "bootstrap";
import React from "react";
import {Link} from "react-router-dom";

export default class Contact extends React.Component {
    delContact = (id) => {
        this.props.deleteContact(id);
    } 
    render(){
        const {contact} = this.props;
        return (
            <div className="card text-white mb-3 card-body-grade shad" >
                <h2 className="card-header">{contact.fullname}</h2>
                <div className="card-body">
                    <p className="card-text">{contact.description}</p>
                </div>
                <span>
                <Link className="btn btn-warning shad cus-btn" to={`/edit/${contact.id}`}>
                    Edit
                </Link>
                </span>
                <span>
                <button className="btn btn-danger shad cus-btn" onClick={() => this.delContact(contact.id)}>
                    Delete
                </button>
                </span>
        </div>
        )}
}


