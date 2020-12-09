import React from 'react';
import axios from 'axios'

class EditPost extends React.Component {
    state = {
        title: '',
        description: '',
        Announcements: ''
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    updatePost = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/posts/${id}`, this.state);
        if(res.data.status === 200){
            this.props.history.push("/");
        }

    }

    async componentDidMount(){
        const id = this.props.match.params.id;
        const res = await axios.get(`/posts/${id}/edit`);
        this.setState({title: res.data.posts.title});
        this.setState({description: res.data.posts.description});
        this.setState({Announcements: res.data.posts.Announcements});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.updatePost} >
                    <div className="form-group">
                        <input type="text" name="title" className ="form-control" value={this.state.title}
                        onChange={this.handleInput} placeholder="title" required />
                    </div>
                    <div className="form-group">
                        <textarea type="text" name="description" className ="form-control" value={this.state.description}
                        onChange={this.handleInput} placeholder="description" required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="Announcements" className ="form-control" value={this.state.Announcements}
                        onChange={this.handleInput} placeholder="Announcements" required />
                    </div>
                    <div className="form-group">
                        <input type="submit" className ="btn btn-primary" value="Edit post" />
                        
                    </div>

                </form>
            </div>
        )
    }
}

export default EditPost;