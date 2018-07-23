
import React, { Component} from 'react';
import { connect } from 'react-redux';
import './TaskEdit.css';
import * as API from '../../apiCalls/apiCalls';
import PropTypes from 'prop-types';
import { mockDocs } from '../../mockData/mockDocs';
import { mockLabs } from '../../mockData/mockLabs';
import ReactTooltip from 'react-tooltip';
import { LabOptions } from './../LabOptions/LabOptions';

export class TaskEdit extends Component {
  constructor() {
    super();
    this.state = {
      topic: '',
      videoLink: '',
      description: '',
      documentation: [],
      labs: [],
      docsToDelete: [],
      labsToDelete: []
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  fetchDocs = () => {
    // const response = await API.getAllDocs();
    // const docs = await response.json();
    const docs = mockDocs;
    const formattedDocs = this.formatDocOptions(docs);
    return formattedDocs;
  }

  formatDocOptions = (docs) => {
    const allDocOptions = docs.map((doc, index) => {
      return (
        <option 
          key={`doc-${index}`} 
          name="documentation"
          // onClick={() => this.handleDocSelect(doc)}
        >
          {doc.topic}
        </option>
      );
    });

    return allDocOptions;
  }

  fetchLabs = () => {
    // const response = await API.getAllLabs();
    // const labs = await response.json();
    const labs = mockLabs;
    return labs;
  }

  handleSelectLab = (lab) => {
    this.setState({
      labs: [...this.state.labs, lab]
    });
  }

  formatChosenLabs = () => {
    const chosenLabsToHtml = this.state.labs.map((lab, index) => {
      return (
        <div 
          key={`chose-lab-${index}`}
          className="Lab_chosen" 
          title={lab.description}
        >
          {lab.name}
          <button>
            delete
          </button>
        </div>
      );
    });
    return chosenLabsToHtml;
  }

  render() {
    const documentation = this.fetchDocs();
    const labs = this.fetchLabs();
    // const chosenDocs = this.state.documentation.length && this.formatChosenDocs(this.state.documentation);
    const chosenLabs = 
      this.state.labs.length && this.formatChosenLabs(this.state.labs);
    // const addedDoc = this.addDocsSelect();

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
          <ul>
            { chosenLabs }
          </ul>
          <LabOptions 
            labs={labs} 
            handleSelectLab={this.handleSelectLab}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default TaskEdit;