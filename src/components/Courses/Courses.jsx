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
        this.setState({courses: results.data});
      });
  }

  render() {
    const courses = this.state.courses.map(course => <CourseCard {...course} key={'course' + course.id}/>);

    return ( 
      <div className='courses_container'>
        {this.state.courses.length ? 
          courses : 
          <img height='200' width='200' src='http://gifimage.net/wp-content/uploads/2017/09/ajax-loading-gif-transparent-background-2.gif'/>}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
});