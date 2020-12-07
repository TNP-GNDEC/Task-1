import React, { Component } from 'react';
import { Header, Button, Divider, Form, TextArea, Message, Segment } from 'semantic-ui-react'
import { API_BASE_URL } from './config';
export default class PostForm extends Component {

    constructor (props) {
        super(props);
        this.state = {
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

        const response = await fetch(API_BASE_URL + '/posts', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                "title": this.state.title,
                "description": this.state.description
            })
        });
        const Post = await response.json();

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
        return (
            <div className="container">
               <Header as="h1" color='teal' textAlign='center'>
                <Header.Content>
                    ADD A POST
                </Header.Content>
                </Header>
                <Divider />
            <Form error={this.state.error} onSubmit={this.onSubmit}>
                <Form.Field error={this.state.error}>
                <label>Post title:</label>
                    <input placeholder='enter Post title' value={this.state.title} onChange={this.handletitleChange}/>
                { this.state.error &&
                <Message
                    error
                    header='Error creating Post'
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
                header='Error creating Post'
                content={this.state.errorMessage}
            />
            }
                <Segment basic textAlign={"center"}>
                <Button textAlign='center' inverted color='teal' type='submit' loading={this.state.isLoading}>Add Post</Button>
        </Segment>
                
                </Form.Field>
            </Form>
            </div>
        )
    }
};