import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CourseCreate.css';
import PropTypes from 'prop-types';
import * as apiCalls from '../../apiCalls/apiCalls';
import { removeCurrentCourse } from '../../actions/currentCourse';

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
      message: ''
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      message: 'Unsaved changes'
    });
  }

  rearrangeTasks = (tasks) => {
    this.setState({ tasks, message: 'Unsaved changes' });
  }

  fetchTasks = async () => {
    const response = await fetch('https://cors-anywhere.herokuapp.com/54.191.130.113:8080/api/admin/v1/tasks');
    const tasks = await response.json();
    this.setState({allTasks: [{name: 'Select Task'}, ...tasks.data]});
  }

  handleTaskSelect = (e) => {
    const task = this.state.allTasks.find(task => task.name === e.target.value);
    if (!this.state.tasks.find(courseTask => courseTask.name === task.name) && task.name !== "Select Task") {
      this.setState({
        tasks: [...this.state.tasks, task],
        message: 'Unsaved changes'
      });
    }
  }

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter(task => task.id !== id);

    this.setState({ tasks, message: 'Unsaved changes' });
  }

  patchCourse = async (e) => {
    e.preventDefault();
    const { name, description, tasks } = this.state;
    const updatedCourse = {
      id: this.props.currentCourse.id,
      name,
      description,
      tasks
    };

    try {
      await fetch('https://cors-anywhere.herokuapp.com/54.191.130.113:8080/api/admin/v1/courses', {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updatedCourse)
      })
        .then(() => {
          this.setState({
            message: 'Course updated!'
          });
        });
    } catch (error) {
      throw error;
    }
  }

  componentDidMount() {
    this.fetchTasks();
  }

  componentWillUnmount() {
    this.props.removeCurrentCourse();
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

    return (
      <div className="CourseCreate_page">
        <h1>Edit course</h1>
        <form 
          className="CourseCreate_form"
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
          <CourseTaskContainer 
            tasks={this.state.tasks} 
            deleteTask={this.deleteTask}
            rearrangeTasks={this.rearrangeTasks}
          />
          <span>Add task: </span>
          <select
            onChange={(e) => this.handleTaskSelect(e)}
          >
            {tasks}
          </select>

          <h2>Students</h2>
          <div className='studentsArea'>
            {
              this.state.students.map((student, index) => {
                return <div className='CourseStudentCard' key={`student-${index}`}>{student.firstName + ' ' + student.lastName}</div>;
              })
            }
          </div>
          <button type="submit"onClick={(e) => this.patchCourse(e)}>Update Course</button>
          <p className='course_message'>{this.state.message}</p>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  currentCourse: state.currentCourse
});

export const mapDispatchToProps = dispatch => ({
  removeCurrentCourse: () => dispatch(removeCurrentCourse())
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseCreate);