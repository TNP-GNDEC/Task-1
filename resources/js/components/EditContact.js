import React from "react";
import axios from "axios";

class EditContact extends React.Component {
    state = {
        fullname : '',
        description : '',
        tag : ''        
    }

    handleInput = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    updateContact = async (e) =>{
        e.preventDefault();
        const id=this.props.match.params.id;
        const res = await axios.patch(`/contact/${id}`,this.state);
        if(res.data.status === 200)
        {
            this.props.history.push("/");
        }
    }
    
    async componentDidMount() {
        const id=this.props.match.params.id;
        const res= await axios.get(`/contact/${id}/edit`);
        this.setState({fullname: res.data.contacts.fullname});
        this.setState({description: res.data.contacts.description});
        this.setState({tag: res.data.contacts.tag});
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.updateContact}>
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
                        value="Update Contact" />
                    </div>
                </form>
            </div>
        )
    }
}

export default EditContact;