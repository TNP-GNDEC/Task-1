import React, { Component } from 'react';
import { Header, Message } from 'semantic-ui-react';
import {
    Card, CardText, CardBody,
    CardTitle, Button,
  } from 'reactstrap';

import { Badge } from 'reactstrap';
import { API_BASE_URL } from './config'

export default class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            isLoading: null
        };
    }

    componentDidMount() {
        this.getposts();
    }

    async getposts() {
        if (! this.state.posts) {
            try {
                this.setState({ isLoading: true });
                const response = await fetch(API_BASE_URL + '/posts', {
                });
                const postsList = await response.json();
                console.log(postsList)
                this.setState({ posts: postsList, isLoading: false});
            } catch (err) {
                this.setState({ isLoading: false });
                console.error(err);
            }
        }
    }

    render() {
        const card = {
            
            margin: "0 auto",

        float: "none",
        marginBottom: "10px", 
          };
        return (
            <div className="jumbotron">
                <Header as="h1">posts</Header>
                {this.state.isLoading && <Message info header="Loading posts..." />}
                {this.state.posts &&
                    <div className="row justify-content-around">
                        {this.state.posts.map(
                                post =>
                                
                                    <Card className="col-8 mt-2" id={post.id} key={post.id} >
                                    <CardBody>
                                        <CardTitle>{post.title}
                                        
                                        {   
                                            post.tags.map(
                                            tag=>
                                            <Badge className="float-right mx-1" color="primary">{tag.name}</Badge>)
                                        }
                                        </CardTitle>
                                        <CardText>{post.description}</CardText>
                                        <Button className="btn btn-sm btn-primary">Read More</Button>
                                    </CardBody>
                                    </Card>
                                
                        )}
                    </div>
                }
            </div>
        );
    }

};