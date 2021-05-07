import React, {Component} from 'react';
import { Input, Button} from 'reactstrap'

class List extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            toDo: []
        }
        this.handleEvent = this.handleEvent.bind(this);
        this.bindButton = this.bindButton.bind(this)

    }

    logValue(event) {
        console.log(event.target.value);
        
    }

    
    handleEvent(event){
        this.setState({toDo: this.state.toDo.concat (event.target.value)})
    }

    bindButton(event){
        this.setState({button: event.target.value})
    }

    render () {
        
        return(
            <div>
                <Input placeholder='Add to your list' type='text' value={this.state.value} onChange={this.logValue, this.bindButton} />
                <br/>
                <Button onClick={this.handleEvent} value={this.state.button} >Add</Button>
                {this.state.toDo.map((myList, index) => {
                        return (
                        <div key={index}>
                            <li>{myList}</li>
                        </div>
                        )
                    })}
            </div>
            
            )
        }
}

export default List;