import React, { Component } from 'react';
import FetchDisplay from './FetchDisplay';

export default class Fetch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: "",
        }
    }
    componentDidMount() {
        console.log('Component Mounted!');
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => this.setState({
                img: data.message,
            })
            );
    }
    render() {
        return (
            <div>
                <h2>Random Dog Photo</h2>
                <button
                onClick={this.componentDidMount.bind(this)}>
                    Dogs are here!</button>
                <FetchDisplay image={this.state.img}/>
            </div>
        )
    }
}
