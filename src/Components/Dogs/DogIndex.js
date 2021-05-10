import React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';

class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: "",
        }
    this.state = {remount: (new Date()).getTime()}
    }

    componentDidMount() {
      
        console.log("Component mounted");
        console.log(this.state.image);
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    img: data.message
                })
            })
            .catch(console.log)
        console.log(this.state.img);
    }
    
    setKey = () => {
        this.setState({
            remount: (new Date()).getTime()
        })
        console.log(this.state.remount);
    }

    render() {
        return (
            <div>
            <h1>Random Dog Photo</h1>
            <img src={this.state.img} key={this.state.remount} alt='dog' />
            <br/>
            <div><Button onClick={this.setKey} >New Dog</Button></div>
            </div>
        )
    }
}

export default DogIndex;