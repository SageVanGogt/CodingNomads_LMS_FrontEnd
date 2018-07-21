import React, { Component } from 'react';
import { mockCourses } from '../../mockData/mockCourses';
import './Courses.css';
import CourseCard from '../CourseCard/CourseCard';

export class Courses extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const courses = mockCourses.map(course => <CourseCard {...course} key={'course' + course.id}/>)

    return ( 
      <div className='courses_container'>
        {courses}
      </div>
    );
  }
}