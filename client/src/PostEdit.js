import React, { Component } from 'react';
import { Header, Button, Divider, Form, TextArea, Message, Segment } from 'semantic-ui-react'
import { API_BASE_URL } from './config';
import { Redirect, useLocation } from "react-router-dom";

export default class PostEditForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: '',
            description: '',
            errorMessage: '',
            error: false,
            isLoading: false
        }
        this.handletitleChange = this.handletitleChange.bind(this);
        this.handledescriptionChange = this.handledescriptionChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
   
    handletitleChange(e) {
        this.setState({
            title: e.target.value
        })
    } 
    
    handledescriptionChange(e) {
        this.setState({
            description: e.target.value
        })
    }

    async onSubmit(e) {
        e.preventDefault();
        this.setState({
            isLoading: true,
            error: false,
            errorMessage: ''
        });

        const response = await fetch(API_BASE_URL + '/posts/' + this.state.id, {
            method: 'PUT',
            headers: {
            'Content-type' : 'application/json; charset=UTF-8'
                },
            body: JSON.stringify({
                "title": this.state.title,
                "description": this.state.description
            })
        });
        const Post = await response.json()
        .then( this.props.history.push('/'));

        if (Post.errors) {
            this.setState({
                isLoading: false,
                error: true,
                errorMessage: Post.errors
            });
        } else {
            this.setState({
                title: '',
                isLoading: false,
                error: false,
                errorMessage: ''
            });

}
    }


    render() {
        console.log()
        return (
            <div className="container">
               <Header as="h1" color='teal' textAlign='center'>
                <Header.Content>
                    EDIT POST 
                </Header.Content>
                </Header>
                <div class="ui column center page grid">
                <div class="six wide column"></div>
            <Form error={this.state.error} onSubmit={this.onSubmit}>
                <Form.Field error={this.state.error}>
                <label>Post title:</label>
                    <input placeholder='enter Post title' value={this.state.title} onChange={this.handletitleChange}/>
                { this.state.error &&
                <Message
                    error
                    header='Error editing the Post'
                    content={this.state.errorMessage}
                />
                } 
                </Form.Field>
                <Form.Field>
                <label>Post description:</label>
                <TextArea
                placeholder='describe post' 
                value={this.state.description} 
                onChange={this.handledescriptionChange}
                />
            { this.state.error &&
            <Message
                error
                header='Error editing Post'
                content={this.state.errorMessage}
            />
            }
                <Segment basic textAlign={"center"}>
                <Button textAlign='center' inverted color='teal' type='submit' loading={this.state.isLoading}>UPDATE Post</Button>
        </Segment>
                
                </Form.Field>
            </Form>
            </div>
            </div>
        )
    }
};