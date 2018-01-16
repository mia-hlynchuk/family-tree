import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
      firstName: '',
      lastName: '',
      dob: '',
      location: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.save = this.save.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
  
    this.setState({ [name]: target.value });
  }

  save() {
    this.setState({ editing: false });
  }

  edit() {
    this.setState({ editing: true });
  }

  delete(key) {
    this.props.onDelete(key);
  }

  // for editing a person
  renderForm() {
    return (
      <div>
        <form>
          <label><span>Ім'я:</span><input onChange={this.handleInputChange} value={this.state.firstName} name="firstName" type="text" /></label>
          <label><span>Фамілія:</span><input onChange={this.handleInputChange} value={this.state.lastName} name="lastName" type="text" /></label>
          <label><span>Дата народження:</span><input onChange={this.handleInputChange} value={this.state.dob} name="dob" type="date" /></label>
          <label><span>Місце народження:</span><input onChange={this.handleInputChange} value={this.state.location} name="location" type="text" /></label>
          <button onClick={this.save}>Save</button>
        </form>
      </div>
    );
  }
  
  // final render result
  renderDisplay() {
    return (
      <div>
        <div>
          <p>{this.state.firstName} {this.state.lastName}</p>
          <p>{this.state.dob}</p>
          <p>{this.state.location}</p>
        </div>
        <button className="editBtn" onClick={this.edit}>Edit</button>
        <button className="deleteBtn" onClick={this.delete}>Delete</button>
      </div>
    );
  }

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