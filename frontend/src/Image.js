import React, { Component } from 'react'
import axios from 'axios'

export default class Image extends Component {
    constructor() {
        super();
        this.state = {
            image: "Not Requested Yet"
        }
    }

    getImage = () => {
        axios.get('/api/randomimg').then(response => {
            this.setState({
                image: response.data.message
            })
        })
    }
    
    render() {
        return (
            <div>
                <h1>Click the button to get random dog images. Keep clicking for more images!</h1>
                <button onClick={ this.getImage }>Get Random Dog Image</button>
                <br/><br/>
                <img src={ this.state.image } alt={ this.state.image } />
            </div>
        )
    }
}
