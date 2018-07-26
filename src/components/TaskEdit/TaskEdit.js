
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

  componentDidMount = () => {
    if (!this.state.allDocs && this.state.allLabs) {
      this.fetchDocs();
      this.fetchLabs();
    }
  }

  componentWillUnmount = () => {
    this.props.removeCurrentTask();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.docs !== this.state.docs) {
      this.state.docs.map(doc => this.addDocOptions(null, doc));
      this.state.labs.map(lab => this.addLabOptions(null, lab));
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
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

  handleSelectLab = (event) => {
    event.preventDefault();
    const labId = {
      id: parseInt(event.target.value)
    };
    if (!this.state.labs.find(lab => lab.id === labId.id)) {
      this.setState({
        labs: [...this.state.labs, labId]
      });
    }
  }

  handleSelectDoc = (event) => {
    event.preventDefault();
    const docId = {
      id: parseInt(event.target.value)
    };
    if (!this.state.docs.find(doc => doc.id === docId.id)) {
      this.setState({
        docs: [...this.state.docs, docId]
      });
    }
  }

  deleteDoc = (event, key) => {
    event.preventDefault();
    const docId = event.target.previousElementSibling.value;
    if (!docId) {
      return;
    }
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

  deleteLab = (event, key) => {
    event.preventDefault();
    const labId = event.target.previousElementSibling.value;
    if (!labId) {
      return;
    }
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

  directToSubmitMethod = (event) => {
    event.preventDefault();
    if (this.props.currentTask.id) {
      this.handlePatchSubmit();
    } else {
      this.handlePostSubmit();
    }
  }

  handlePostSubmit = async () => {
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

  handlePatchSubmit = async () => {
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
    } catch (error) {
      //mdp this error
    }
    this.handleDeletedLabs();
    this.handleDeletedDocs();
  }

  handleDeletedLabs = async () => {
    const labsToDelete = this.state.labsToDelete;
    try {
      await API.deleteLabsFromTask(labsToDelete);
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

  addDocOptions = (event, doc) => {
    if (event) {
      event.preventDefault();
    }
    console.log(doc)
    this.setState({
      docOptions:
        [
          ...this.state.docOptions,
          <DocOptions
            key={`doc-${this.state.docOptions}`}
            id={`doc-option-${this.state.docOptions.length + 1}`}
            docs={this.state.allDocs}
            doc={doc}
            handleSelectDoc={this.handleSelectDoc}
            deleteDoc={this.deleteDoc}
          />
        ]
    });
  }

  addLabOptions = (event, lab) => {
    if (event) {
      event.preventDefault();
    }
    this.setState({
      labOptions:
        [
          ...this.state.labOptions,
          <LabOptions
            key={`lab-${this.state.labOptions}`}
            id={`lab-option-${this.state.labOptions.length + 1}`}
            labs={this.state.allLabs}
            lab={lab}
            handleSelectLab={this.handleSelectLab}
            deleteLab={this.deleteLab}
          />
        ]
    });
  }

  render() {
    return (
      <div className="TaskCreate_page">
        <form 
          action="submit" 
          className="TaskCreate_form"
          onSubmit={this.directToSubmitMethod}
        >
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
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
          <DocOptions
            id={`doc-option-0`}
            docs={this.state.allDocs}
            handleSelectDoc={this.handleSelectDoc}
            deleteDoc={this.deleteDoc}
          />
          {this.state.docOptions}
          <button onClick={(event) => this.addDocOptions(event)}>new doc</button>

          <LabOptions
            id={`lab-option-0`}
            labs={this.state.allLabs}
            handleSelectLab={this.handleSelectLab}
            deleteLab={this.deleteLab}
          />
          {this.state.labOptions}
          <button onClick={(event) => this.addLabOptions(event)}>new lab</button>
          <input type="submit" />
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