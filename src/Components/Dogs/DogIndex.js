import React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';

class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: "",
        }
        this.getPhoto = this.getPhoto.bind(this)
    }

    componentDidMount() {
      
        console.log("Component mounted");
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
    
    getPhoto() {
     this.setState({img: ''});
     this.componentDidMount()
    }

    render() {
        return (
            <div>
            <h1>Random Dog Photo</h1>
            <img src={this.state.img} key={this.state.remount} alt='dog' />
            <br/>
            <div><Button onClick={this.getPhoto} >New Dog</Button></div>
            </div>
        )
    }
}

export default DogIndex;