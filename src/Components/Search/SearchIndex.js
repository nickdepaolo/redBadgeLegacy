import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component{
  constructor(props) {
    super(props);
   this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     filteredThings: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
   }
   this.searchFunction = this.searchFunction.bind(this)
 }

 searchFunction(event) {
const userInput = event.target.value;
const filteredItems = 
this.state.things.filter(item => {
  return item.includes(userInput)
});
this.setState({filteredThings: filteredItems});
 console.log(this.state.filteredThings);
}

 render() {

     return ( 
      <div>
      <Input placeholder='Search Here' id='filter' type='text' value={this.state.value} onChange= {this.searchFunction}/>
      <h3>Results:</h3>
    
      {this.state.filteredThings.map((item, index) => {
                        return (
                        <div key={index}>
                            <li>{item}</li>
                        </div>
                        )
                    })}
      </div>
     )
     
 };
};

export default SearchIndex;
