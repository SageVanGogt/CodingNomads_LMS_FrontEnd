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
      id: parseInt(event.target.value)
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
      id: parseInt(event.target.value)
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
        docsToDelete: [...this.state.docsToDelete, docId]
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
        labsToDelete: [...this.state.labsToDelete, labId]
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

    try {
      await API.deleteDocsFromTask(docsToDelete);
    } catch (error) {
      //mdp this error
    }
  }

  handleDeletedLabs = async () => {
    const labsToDelete = this.state.labsToDelete;

    try {
      await API.deleteLabsFromTask(labsToDelete);
    } catch (error) {
      //mdp this error
    }
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="TaskCreate_page">
        <form 
          action="submit" 
          className="TaskCreate_form"
          onSubmit={this.determineSubmitMethod}
=======
      <div className="TaskEdit_page">
        <form
          action="submit"
          className="TaskEdit_form"
          onSubmit={this.directToSubmitMethod}
>>>>>>> Add basic css positioning to taskEdit
        >
          <label for="name">Task name:</label>
          <input
            type="text"
            placeholder="name"
            name="name"
<<<<<<< HEAD
            onChange={this.handleInputChange}
=======
            className="TaskEdit_input TaskEdit_input-name"
            onChange={this.handleChange}
>>>>>>> Add basic css positioning to taskEdit
            value={this.state.name}
          />
          <label for="description">Description of task:</label>
          <input
            type="text"
            placeholder="description"
            name="description"
<<<<<<< HEAD
            onChange={this.handleInputChange}
=======
            className="TaskEdit_input TaskEdit_input-description"
            onChange={this.handleChange}
>>>>>>> Add basic css positioning to taskEdit
            value={this.state.description}
          />
          <label for="videoLink">Link to the lesson video:</label>
          <input
            type="text"
            placeholder="url"
            name="videoLink"
<<<<<<< HEAD
            onChange={this.handleInputChange}
=======
            className="TaskEdit_input TaskEdit_input-videoLink"
            onChange={this.handleChange}
>>>>>>> Add basic css positioning to taskEdit
            value={this.state.videoLink}
          />
          <div className="TaskEdit_select-list">
            {this.state.docOptions}
            <button onClick={(event) => this.addDocOptions(event)}>new doc</button>
          </div>
          <div className="TaskEdit_select-list">
            {this.state.labOptions}
            <button onClick={(event) => this.addLabOptions(event)}>new lab</button>
          </div>
          <input className="TaskEdit_submit" type="submit" />
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
  currentTask: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskEdit);
<<<<<<< HEAD


=======
>>>>>>> Add basic css positioning to taskEdit
