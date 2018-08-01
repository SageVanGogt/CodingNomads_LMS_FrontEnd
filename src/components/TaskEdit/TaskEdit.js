import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TaskEdit.css';
import * as API from '../../apiCalls/apiCalls';
import PropTypes from 'prop-types';
import { LabOptions } from '../LabOptions/LabOptions';
import { DocOptions } from '../DocOptions/DocOptions';
import { removeCurrentTask } from '../../actions/currentTask';

export class TaskEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentTask.id || null,
      name: this.props.currentTask.name || '',
      videoLink: this.props.currentTask.videoLink || '',
      description: this.props.currentTask.description || '',
      docs: this.props.currentTask.docs || [],
      labs: this.props.currentTask.labs || [],
      allDocs: [],
      allLabs: [],
      docsToDelete: [],
      labsToDelete: [],
      docOptions: [],
      labOptions: []
    };
  }

  componentDidMount = async () => {
    await this.fetchDocs();
    await this.fetchLabs();
    this.state.docs.forEach(doc => this.addDocOptions(doc));
    this.state.labs.forEach(lab => this.addLabOptions(lab));
    this.addLabOptions();
    this.addDocOptions();
  }

  componentWillUnmount = () => {
    this.props.removeCurrentTask();
  }

  fetchDocs = async () => {
    const docs = await API.getAllDocs();

    this.setState({
      allDocs: docs.data
    });
  }

  fetchLabs = async () => {
    const labs = await API.getAllLabs();

    this.setState({
      allLabs: labs.data
    });
  }

  addDocOptions = (doc) => {
    this.setState({
      docOptions:
        [
          ...this.state.docOptions,
          <DocOptions
            key={`doc-${this.state.docOptions.length + 1}`}
            id={`doc-option-${this.state.docOptions.length + 1}`}
            docs={this.state.allDocs}
            docSelected={doc}
            handleSelectDoc={this.handleSelectDoc}
            deleteDoc={this.deleteDoc}
          />
        ]
    });
  }

  addLabOptions = (lab) => {
    this.setState({
      labOptions:
        [
          ...this.state.labOptions,
          <LabOptions
            key={`lab-${this.state.labOptions + 1}`}
            id={`lab-option-${this.state.labOptions.length + 1}`}
            labs={this.state.allLabs}
            labSelected={lab}
            handleSelectLab={this.handleSelectLab}
            deleteLab={this.deleteLab}
          />
        ]
    });
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSelectDoc = (event) => {
    event.preventDefault();
    const newDoc = {
      id: parseInt(event.target.value, 10)
    };

    if (!this.state.docs.find(doc => doc.id === newDoc.id)) {
      this.setState({
        docs: [...this.state.docs, newDoc]
      });
    }
  }

  handleSelectLab = (event) => {
    event.preventDefault();
    const newLab = {
      id: parseInt(event.target.value, 10)
    };

    if (!this.state.labs.find(lab => lab.id === newLab.id)) {
      this.setState({
        labs: [...this.state.labs, newLab]
      });
    }
  }

  deleteDoc = (event, key) => {
    event.preventDefault();
    const docId = event.target.previousElementSibling.value;

    if (docId) {
      const updatedDocs =
        this.state.docs.filter(doc => doc.id !== docId);
      const docOptions =
        this.state.docOptions.filter(doc => doc.props.id !== key);

      this.setState({
        docs: updatedDocs,
        docOptions,
        docsToDelete: [...this.state.docsToDelete, {id: parseInt(docId, 10)}]
      });
    }
  }

  deleteLab = (event, key) => {
    event.preventDefault();
    const labId = event.target.previousElementSibling.value;

    if (labId) {
      const updatedLabs =
        this.state.labs.filter(lab => lab.id !== labId);
      const labOptions =
        this.state.labOptions.filter(lab => lab.props.id !== key);

      this.setState({
        labs: updatedLabs,
        labOptions,
        labsToDelete: [...this.state.labsToDelete, {id: parseInt(labId, 10)}]
      });
    }
  }

  determineSubmitMethod = (event) => {
    event.preventDefault();

    if (this.props.currentTask.id) {
      this.patchTask();
    } else {
      this.postNewTask();
    }
  }

  postNewTask = async () => {
    const { name, description, videoLink, docs, labs } = this.state;
    const task = {
      name,
      description,
      videoLink,
      docs,
      labs
    };

    try {
      await API.postTask(task);
    } catch (error) {
      //mdp this error
    }
  }

  patchTask = async () => {
    const { id, name, description, videoLink, docs, labs } = this.state;
    const taskToUpdate = {
      id,
      name,
      description,
      videoLink,
      docs,
      labs
    };

    try {
      await API.updateTask(taskToUpdate);
      this.handleDeletedDocs();
      this.handleDeletedLabs();
    } catch (error) {
      //mdp this error
    }

  }

  handleDeletedDocs = async () => {
    const docsToDelete = this.state.docsToDelete;
    const taskId = this.props.currentTask.id;
    
    try {
      await API.deleteDocsFromTask(taskId, docsToDelete);
    } catch (error) {
      console.log(error)
    }
  }

  handleDeletedLabs = async () => {
    const labsToDelete = this.state.labsToDelete;
    const taskId = this.props.currentTask.id;

    try {
      await API.deleteLabsFromTask(taskId, labsToDelete);
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="TaskEdit_page">
        <h1 className="TaskEdit_title">Fill out Task fields</h1>
        <form
          action="submit"
          className="TaskEdit_form"
          onSubmit={this.determineSubmitMethod}
        >
          <label for="name">Task name:</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="TaskEdit_input TaskEdit_input-name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <label for="description">Description of task:</label>
          <textarea
            type="text"
            placeholder="description"
            name="description"
            className="TaskEdit_input TaskEdit_input-description"
            onChange={this.handleInputChange}
            value={this.state.description}
          >
          </textarea>
          <label for="videoLink">Link to the lesson video:</label>
          <input
            type="text"
            placeholder="url"
            name="videoLink"
            className="TaskEdit_input TaskEdit_input-videoLink"
            onChange={this.handleInputChange}
            value={this.state.videoLink}
          />
          <div className="TaskEdit_select-list">
            <p>Select documents for your students to read with this task</p>
            {this.state.docOptions}
            <button className="TaskEdit_new-select" onClick={(event) => this.addDocOptions(event)}>New Doc +</button>
          </div>
          <div className="TaskEdit_select-list">
            <p>Select labs for your students to do with this task</p>
            {this.state.labOptions}
            <button className="TaskEdit_new-select" onClick={(event) => this.addLabOptions(event)}>New Lab +</button>
          </div>
          <input className="TaskEdit_submit" type="submit"  value="Submit Task Changes"/>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  currentTask: state.currentTask
});

export const mapDispatchToProps = (dispatch) => ({
  removeCurrentTask: () => dispatch(removeCurrentTask())
});

TaskEdit.propTypes = {
  currentTask: PropTypes.object,
  removeCurrentTask: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskEdit);


