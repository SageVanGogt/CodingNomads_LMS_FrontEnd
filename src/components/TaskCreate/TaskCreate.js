
import React, { Component} from 'react';
import { connect } from 'react-redux';
import './TaskCreate.css';
import PropTypes from 'prop-types';

export class TaskCreate extends Component {
  constructor() {
    super();
    this.state = {
      topic: '',
      videoLink: '',
      description: '',
      documentation: []
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  fetchDocs = async () => {
    //fetches all documentation and returns 
    //an array of objects
    const response = await fetch(url);
    const docs = await response.json();
    const formattedDocs = this.formatDocOptions(docs);
    return formattedDocs;
  }

  formatDocOptions = (docs) => {
    //should selecting a doc activate a function sending it to state?
    //how should we store multiple doc choices?
    const allDocOptions = docs.map((doc, index) => {
      return (
        <option 
          key={`doc-${index}`} 
          name="documentation"
          onClick={() => this.handleDocSelect(doc)}>
          {doc.topic}
        </option>
      );
    });
    //the idea above is to allow us to allow an admin
    //to select an option, which pushes it's info
    //into the state documentation array
    //then, on submit, the info will be mapped over
    //and multiple fetch calls will make the inputs
    //for the lookup tables
    return allDocOptions;
  }

  render() {
    const documentation = this.fetchDocs();
    
    return (
      <div className="TaskCreate_page">
        <form action="submit" className="TaskCreate_form">
          <input 
            type="text" 
            placeholder="topic" 
            name="topic"
            onChange={this.handleChange}
            value={this.state.topic}
          />
          <input 
            type="text" 
            placeholder="description" 
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <input 
            type="text" 
            placeholder="url" 
            name="videoLink"
            onChange={this.handleChange}
            value={this.state.videoLink}
          />
          <select name="" id="">
            {documentation}
          </select>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default TaskCreate;