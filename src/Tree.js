import React, { Component } from 'react';
import './Tree.css';
import Person from './Person';

class Tree extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedMember: 'you', // current person that is being edited
      members: [] // holds all the family members
    }

    this.update = this.update.bind(this);
  }

  update(who, info) {  
    // add the person to the members array
    const _members = this.state.members;
    _members.push({
      key: Date.now(),
      who: who,
      ...info
    });

    this.setState({
      members: _members
    });
   
   console.log(this.state.members);
  }


  render() {
    return (
      <div className="Tree">
        <header>
          <h1>Моє Сімейне Дерево</h1>
        </header>
        <Person onSave={this.update} who="you"  />
      </div>
    );
  }
}

export default Tree;