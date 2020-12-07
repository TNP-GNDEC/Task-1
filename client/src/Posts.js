import React, { Component } from 'react';
import { Header, Message } from 'semantic-ui-react';
import { Card} from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

import { API_BASE_URL } from './config';
export default class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            isLoading: null
        };
        this.onDelete = this.onDelete.bind(this);

    }

    componentDidMount() {
        this.getposts();
    }

    async onDelete(id) {
        console.log(id)
        const response = await fetch(API_BASE_URL + '/posts/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                Accept: 'application/json'
            }
        });
        await response;
        let posts = this.state.posts;
        let index = posts.findIndex(post => post.id === this.props.id)
        posts.splice(index, 1)       
        this.setState({
            posts: posts
        })
    }

    
    async getposts() {
        if (! this.state.posts) {
            try {
                this.setState({ isLoading: true });
                const response = await fetch(API_BASE_URL + '/posts', {
                });
                const postsList = await response.json();
                this.setState({ posts: postsList, isLoading: false});
            } catch (err) {
                this.setState({ isLoading: false });
            }
        }
    }

    render() {

        return (
            <div> 
                <Header as="h1" color='teal' textAlign='center'>
                <Header.Content>
                    POSTS
                </Header.Content>
                </Header>
            <div className="ui centered grid ui">
                {this.state.isLoading && <Message info header="Loading posts..." />}
                {this.state.posts &&
                         <div className="six wide column">  {                                                 
                        this.state.posts.map(
                                post =>
                                    <Card  color='teal' id={post.id} key={post.id} >
                                    <Card.Content textAlign="center" header={post.title} />
                                    <Card.Content description={post.description} /> 
                                        <Card.Content extra>{post.tags.map(
                                            tag=>
                                               <a className="ui teal tag label">{tag.name} </a>)}
                                               </Card.Content> 
                                               <Card.Content>
                                               <div className='ui two buttons'>
                                                    <Button basic color='green'>Edit</Button>
                                                    <Button onClick={()=>this.onDelete(post.id)} basic color='red'>Delete</Button> 
                                                        </div>
                                                    </Card.Content>
                                    </Card>
                        )}
                        </div>
                }
            </div>
        
    
    </div>);}
};