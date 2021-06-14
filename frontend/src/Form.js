import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: ''
        }
    }

    handleTitleChange = (event) => {
        this.setState({ title: event.target.value })
    }
    handleDescriptionChange = (event) => {
        this.setState({ description: event.target.value })
    }

    handleSubmit(event) {
        axios.post('/api/post/submit', {
            title: this.state.title,
            description: this.state.description
        })
        .then((res) => {
            alert('A Post was submitted with the title: ' + this.state.title)
        }, (error) => {
            alert('ERROR: ' + error)
        });
        
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label>
                    <input type="text" value={ this.state.title } onChange={ this.handleTitleChange } name="title" />
                    <br />
                    <label>Description:</label>
                    <textarea name="description" id="description" cols="30" rows="10" value={ this.state.description } onChange={ this.handleDescriptionChange }></textarea>
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form
