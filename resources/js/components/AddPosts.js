import React from 'react';
import axios from 'axios'

class AddPosts extends React.Component {
    state = {
        title: '',
        description: '',
        Announcements: ''
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    savePost = async (e) => {
        e.preventDefault();
        const res = await axios.post("/posts", this.state);
        this.setState({title: '', description: '', phone: ''});
        if(res.data.status === 200) {
            this.props.history.push("/")
        }
        console.log(res);

    }
    render(){
        return(
            <div>
                <form onSubmit={this.savePost} >
                    <div className="form-group">
                        <input type="text" name="title" className ="form-control" value={this.state.title}
                        onChange={this.handleInput} placeholder="title" required />
                    </div>
                    <div className="form-group">
                        <textarea type="text" name="description" className ="form-control" value={this.state.description}
                        onChange={this.handleInput} placeholder="description" required />
                    </div>
                    <div className="form-group">
                        <select type="text" name="Announcements" className ="form-control" value={this.state.Announcements}
                        onChange={this.handleInput} placeholder="Announcements" required >
                        <option value="Announcement">Announcement</option>
                            <option value="Selection">Selection</option>
                            <option value="Placement">Placement</option>
                            <option value="Training">Training</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" className ="btn btn-primary" value="Add post" />
                        
                    </div>

                </form>
            </div>
        )
    }
}

export default AddPosts;