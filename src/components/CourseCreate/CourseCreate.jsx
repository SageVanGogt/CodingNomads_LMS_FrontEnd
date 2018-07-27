import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mockTasks } from '../../mockData/mockTasks';
import './CourseCreate.css';
import PropTypes from 'prop-types';
import * as apiCalls from '../../apiCalls/apiCalls';
// import { CourseTaskCard } from '../CourseTaskCard/CourseTaskCard';

import { CourseTaskContainer } from '../CourseTasksContainer/CourseTaskContainer';

export class CourseCreate extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: this.props.currentCourse.name,
      description: this.props.currentCourse.description,
      tasks: this.props.currentCourse.tasks || [],
      students: this.props.currentCourse.students || [],
      tasksToDelete: [],
      labsToDelete: [],
      allTasks: [],
      allStudents: []
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  rearrangeTasks = (tasks) => {
    this.setState({ tasks });
  }

  fetchTasks = async () => {
    const response = await fetch('https://cors-anywhere.herokuapp.com/54.191.130.113:8080/api/admin/v1/tasks');
    const tasks = await response.json();
    this.setState({allTasks: [{name: 'Select Task'}, ...tasks.data]});
  }

  fetchStudents = async () => {
    const response = await fetch('https://cors-anywhere.herokuapp.com/54.191.130.113:8080/api/admin/v1/students');
    const students = await response.json();
    this.setState({ allStudents: [{ firstName: 'Select', lastName: 'Student' }, ...students.data] });
  }
  
  handleTaskSelect = (e) => {
    const task = this.state.allTasks.find(task => task.name === e.target.value);
    if (!this.state.tasks.includes(task) && task.name !== "Select Task") {
      this.setState({
        tasks: [...this.state.tasks, task]
      });
    }
  }

  handleStudentSelect = (e) => {
    const student = this.state.allStudents.find(student => student.name === e.target.value);
    if (!this.state.students.includes(student) && student.name !== "Select Student") {
      this.setState({
        students: [...this.state.students, student]
      });
    }
  }

  componentDidMount() {
    this.fetchTasks();
    this.fetchStudents();
  }

  render() {
    const tasks = this.state.allTasks.map((task, index) => {
      return (
        <option
          key={`task-${index}`}
          name="task"
          title={task.description}>
          {task.name}
        </option>
      );
    });

    const students = this.state.allStudents.map((student, index) => {
      return (
        <option
          key={`student-${index}`}
          name="student">
          {student.firstName + ' ' + student.lastName}
        </option>
      );
    });

    return (
      <div className="CourseCreate_page">
        <h1>Edit course</h1>
        <form 
          action="submit" 
          className="CourseCreate_form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <textarea
            type="text"
            placeholder="Description"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <h2>Tasks</h2>
          <CourseTaskContainer tasks={this.state.tasks} rearrangeTasks={this.rearrangeTasks}/>
          <span>Add task: </span>
          <select
            onChange={(e) => this.handleTaskSelect(e)}
          >
            {tasks}
          </select>

          <select
            onChange={(e) => this.handleStudentSelect(e)}
          >
            {students}
          </select>
          <button type="submit">Submit Course</button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  currentCourse: state.currentCourse
});

export default connect(mapStateToProps, null)(CourseCreate);