import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
      info: {
        firstName: '',
        lastName: '',
        dob: '', // date of birth
        pob: '' // place of birth
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.save = this.save.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    
   const info = this.state.info;
   
    const newInfo = {
      ...info,
      [name]: target.value
    };

    this.setState({ info: newInfo});
  }

  save() { 
    // pass the person's info to the parent component 
    this.props.onSave(this.props.who, this.state.info);
    this.setState({ editing: false });
  }

  edit() {
    this.setState({ editing: true });
  }

  delete(key) {
    this.props.onDelete(key);
  }

  // for editing a person's information
  renderForm() {
    return (
      <div>
        <form>
          <label><span>Ім'я:</span><input onChange={this.handleInputChange} name="firstName" type="text" /></label>
          <label><span>Фамілія:</span><input onChange={this.handleInputChange} name="lastName" type="text" /></label>
          <label><span>Дата народження:</span><input onChange={this.handleInputChange} name="dob" type="date" /></label>
          <label><span>Місце народження:</span><input onChange={this.handleInputChange} name="pob" type="text" /></label>
          <button onClick={this.save}>Save</button> 
        </form>
      </div>
    );
  }
  
  // displaying a person's information
  renderDisplay() {
    return (
      <div>
        <div>
          <p>{this.state.info.firstName} {this.state.info.lastName}</p>
          <p>{this.state.info.dob}</p>
          <p>{this.state.info.pob}</p>
        </div> 
        <button className="editBtn" onClick={this.edit}>Edit</button>
        <button className="deleteBtn" onClick={this.delete}>Delete</button>    
      </div>
    );
  }

  // final render result
  render() {
    return (
      <div className={"person " + this.props.clName}>
        <h3>{this.props.who}</h3>
        { (this.state.editing) ? this.renderForm() : this.renderDisplay() }
      </div>
    );
  }
}

export default Person;