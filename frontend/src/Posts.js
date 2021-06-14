import React, { Component } from 'react'
import axios from 'axios'

export default class Posts extends Component {
    constructor() {
        super();
        this.state = {
            postData: [{
                title: "No Data Pulled", 
                description: "No Data Pulled"
            }]
        }
    }

    getPosts = () => {
        axios.get('/api/post/retrieve').then(response => {
            this.setState({
                postData: response.data
            });
            console.log(this.state.postData);
        })
    }
    
    render() {
        return (
            <div>
                <h1>List of Posts from MongoDB</h1>
                <button onClick={ this.getPosts }>Get All Posts</button>
                <br/><br/>
                {
                    this.state.postData.map((post, i) => (
                        <ul key={ i }>
                            <li>{ post.title }: { post.description }</li>
                        </ul>
                    ))
                }
            </div>
        )
    }
}
