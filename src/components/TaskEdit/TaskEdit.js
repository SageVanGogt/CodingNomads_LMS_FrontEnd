
import React, { Component} from 'react';
import { connect } from 'react-redux';
import './TaskEdit.css';
import * as API from '../../apiCalls/apiCalls';
import PropTypes from 'prop-types';
import { mockDocs } from '../../mockData/mockDocs';
import { mockLabs } from '../../mockData/mockLabs';
import { LabOptions } from '../LabOptions/LabOptions';
import { DocOptions } from '../DocOptions/DocOptions';
import { ChosenLabs } from '../ChosenLabs/ChosenLabs';
import { ChosenDocs } from '../ChosenDocs/ChosenDocs';

export class TaskEdit extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      topic: '',
      videoLink: '',
      description: '',
      docs: [],
      labs: [],
      docsToDelete: [],
      labsToDelete: []
    };
  }

  componentDidUpdate = (prevProps) => {
    const { currentTask } = this.props;
    if (prevProps.currentTask !== currentTask) {
      this.loadTaskInfo(currentTask);
    }
  }

  loadTaskInfo = ({id, topic, videoLink, docs, labs}) => {
    this.setState({
      id,
      topic,
      videoLink,
      docs,
      labs
    });
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
    return docs;
  }

  fetchLabs = () => {
    // const response = await API.getAllLabs();
    // const labs = await response.json();
    const labs = mockLabs;
    return labs;
  }

  handleSelectLab = (lab) => {
    if (!this.state.labs.includes(lab)) {
      this.setState({
        labs: [...this.state.labs, lab]
      });
    }
  }

  handleSelectDoc = (doc) => {
    if (!this.state.docs.includes(doc)) {
      this.setState({
        docs: [...this.state.docs, doc]
      });
    }
  }

  deleteChosenLab = (event, labId) => {
    event.preventDefault();
    const updatedLabs = this.state.labs.filter(lab => lab.id !== labId);
    this.setState({
      labs: updatedLabs,
      labsToDelete: [...this.state.labsToDelete, labId]
    });
  }

  deleteChosenDoc = (event, docId) => {
    event.preventDefault();
    const updatedDocs = this.state.docs.filter(doc => doc.id !== docId);
    this.setState({
      docs: updatedDocs,
      docsToDelete: [...this.state.docsToDelete, docId]
    });
  }

  render() {
    const docs = this.fetchDocs();
    const labs = this.fetchLabs();

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
          { 
            this.state.docs.length &&
            <ChosenDocs 
              docs={this.state.docs}
              deleteChosenDoc={this.deleteChosenDoc}
            />
          }
          <DocOptions 
            docs={docs}
            handleSelectDoc={this.handleSelectDoc}
          />
          { 
            this.state.labs.length &&
            <ChosenLabs
              labs={this.state.labs}
              deleteChosenLab={this.deleteChosenLab}
            />
          }
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

export const mapStateToProps = (state) => ({
  currentTask: state.currentTask
});

TaskEdit.propTypes = {
  currentTask: PropTypes.object
};

export default connect(mapStateToProps, null)(TaskEdit);