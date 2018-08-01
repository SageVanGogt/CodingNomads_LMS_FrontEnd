import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CourseCreate.css';
import PropTypes from 'prop-types';
import { removeCurrentCourse } from '../../actions/currentCourse';
import { 
  CourseTaskContainer 
} from '../CourseTasksContainer/CourseTaskContainer';
import * as apiCalls from '../../apiCalls/apiCalls';

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
      message: 'You have unsaved changes, submit to save them.'
    });
  }

  rearrangeTasks = (tasks) => {
    this.setState({ 
      tasks, 
      message: 'You have unsaved changes, submit to save them.' 
    });
  }

  fetchTasks = async () => {
    const tasks = await apiCalls.getAllTasks();
    this.setState({allTasks: [{name: 'Select Task'}, ...tasks.data]});
  }

  handleTaskSelect = (event) => {
    const { value } = event.target;
    const task = this.state.allTasks.find(task => task.name === value);
    if (!this.state.tasks.find(courseTask => courseTask.name === task.name) 
      && task.name !== "Select Task") {
      this.setState({
        tasks: [...this.state.tasks, task],
        message: 'You have unsaved changes, submit to save them.'
      });
    }
  }

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter(task => task.id !== id);

    this.setState({ 
      tasks, 
      message: 'You have unsaved changes, submit to save them.' 
    });
  }

  postCourse = async () => {
    const { name, description, tasks } = this.state;
    const newCourse = { name, description, tasks };
    apiCalls.addCourse(newCourse)
      .then(() => {
        this.setState({
          message: 'Course updated!'
        });
      });
  }

  patchCourse = async () => {
    const { name, description, tasks } = this.state;
    const updatedCourse = {
      id: this.props.currentCourse.id,
      name,
      description,
      tasks
    };

    try {
      apiCalls.updateCourse(updatedCourse)
        .then(() => {
          this.setState({
            message: 'Course updated!'
          });
        });
    } catch (error) {
      throw error;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.currentCourse.id) {
      this.patchCourse();
    } else (
      this.postCourse()
    );
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
            onChange={(event) => this.handleTaskSelect(event)}
          >
            {tasks}
          </select>

          <h2>Students</h2>
          <div className='studentsArea'>
            {
              this.state.students.map((student, index) => {
                return (
                  <div 
                    className='CourseStudentCard' 
                    key={`student-${index}`} >
                    {student.firstName + ' ' + student.lastName}
                  </div>
                );
              })
            }
          </div>
          <button 
            type="submit"
            onClick={(event) => this.handleSubmit(event)}
          >Update Course</button>
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

CourseCreate.propTypes = {
  currentCourse: PropTypes.object,
  removeCurrentCourse: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseCreate);
