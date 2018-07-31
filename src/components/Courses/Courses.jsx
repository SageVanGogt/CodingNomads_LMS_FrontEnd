import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Courses.css';
import CourseCard from '../CourseCard/CourseCard';
import { updateCurrentCourse } from '../../actions/currentCourse';
import { COURSE_EDIT } from '../../constants/routes';

export class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };
  }

  addCourse = async () => {
    const newCourse = {name: "", description: ""}
    const response = await fetch('https://cors-anywhere.herokuapp.com/54.191.130.113:8080/api/admin/v1/courses', {
      method: 'POST',
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(newCourse)
    })
    const data = await response.json();
    console.log(data)

    this.props.updateCurrentCourse(data.data);
    this.props.history.push(COURSE_EDIT);
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/54.191.130.113:8080/api/admin/v1/courses', {
      method: "GET",
      mode: "cors"
    })
      .then(response => response.json())
      .then(results => {
        this.setState({courses: results.data});
      });
  }

  render() {
    const courses = this.state.courses.map(course => {
      return <CourseCard {...course} key={'course' + course.id}/>
    });

    return ( 
      <div className='courses_container'>
        <button 
          className='new_course_button' 
          onClick={this.addCourse}>New Course +
        </button>
        <section className='course_cards'>
          {this.state.courses.length ? 
            courses : 
            <img height='200' width='200' src='/loading1.gif'/>}
        </section>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  updateCurrentCourse: (currentCourse) => {
    return dispatch(updateCurrentCourse(currentCourse))
}})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Courses))
