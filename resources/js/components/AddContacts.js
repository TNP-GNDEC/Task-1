import React from "react";
import axios from "axios";


class AddContacts extends React.Component {
    state = {
        fullname : '',
        description : '',
        tag : ''        
    }

    handleInput = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    saveContact = async (e) =>{
        e.preventDefault();
        const res = await axios.post("/contact",this.state);
        this.setState({fullname : '',
            description : '',
            tag : '' });
        if(res.data.status === 200)
        {
            this.props.history.push("/");
        }
        //console.log(res);
    } 
    render(){
        return(
            <div>
                <form onSubmit = {this.saveContact}>
                    <div className = "form-group" >
                        <input 
                        type="text" 
                        name="fullname" 
                        className="form-control" 
                        value={this.state.fullname}
                        onChange={this.handleInput}
                        placeholder = "Enter Title" />
                        <input 
                        type="text" 
                        name="description" 
                        className="form-control" 
                        value={this.state.description}
                        onChange={this.handleInput}
                        placeholder = "Enter description" />
                        <input 
                        type="text" 
                        name="tag" 
                        className="form-control" 
                        value={this.state.tag}
                        onChange={this.handleInput}
                        placeholder = "Enter tag" />
                        <input 
                        type="submit" 
                        className="btn btn-primary" 
                        value="Add Contact" />
                    </div>
                </form>
            </div>
        )
    }
}

export default AddContacts;