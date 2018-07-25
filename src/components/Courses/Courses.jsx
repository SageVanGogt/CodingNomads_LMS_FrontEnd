import React, { Component } from 'react';
import { mockCourses } from '../../mockData/mockCourses';
import './Courses.css';
import CourseCard from '../CourseCard/CourseCard';

export class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/54.191.130.113:8080/api/admin/v1/courses', {
      method: "GET",
      mode: "cors"
    })
      .then(response => response.json())
      .then(results => {
        console.log(1)
        this.setState({courses: results.data});
        // results.data.map(course => <CourseCard {...course} key={'course'+ course.id}/>);
      })
  }

  render() {
    const courses = this.state.courses.map(course => <CourseCard {...course} key={'course' + course.id}/>);

    return ( 
      <div className='courses_container'>
        {courses}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
});