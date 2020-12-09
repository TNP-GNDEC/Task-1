import React from 'react';
import axios from 'axios'
import Post from "./Post"

class Posts extends React.Component {

    state ={
        posts: [],
        loading: true, 
    }

    fetchPosts = async () => {
        const res = await axios.get("/posts");
        if(res.data.status === 200){
            this.setState({posts: res.data.posts});
            this.setState({loading: false});
        }
        console.log(res);

    }

    componentDidMount(){
        this.fetchPosts();

    }

    deletepost = async (id) => {
        const res = await axios.delete(`/posts/${id}`);
        if(res.data.status === 200){
            this.fetchPosts();
        }
    }

    render(){
        if(this.state.loading){
            return <h1>Loading....</h1>
        }
        return( 
            (this.state.posts.map(posts => (
                <Post posts = {posts} key={posts.id} deletepost = {this.deletepost} />

            )))
        )
    }
}

export default Posts;