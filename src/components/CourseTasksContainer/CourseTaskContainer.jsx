import React, { Component } from 'react';
import { render } from 'react-dom';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import { CourseTaskCard } from '../CourseTaskCard/CourseTaskCard';


const SortableItem = SortableElement(({ task }) =>
  <CourseTaskCard {...task} />
);

const SortableList = SortableContainer(({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <SortableItem key={`item-${index}`} index={index} task={task} />
      ))}
    </ul>
  );
});

export class CourseTaskContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: []
    };
  }

  shouldCancelStart = (e) => {
    // Cancel sorting if the event target is an `input`, `textarea`, `select` or `option`
    if (['input', 'textarea', 'select', 'option', 'img', 'image'].indexOf(e.target.tagName.toLowerCase()) !== -1) {
      return true; // Return true to cancel sorting
    }
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    let tasks = arrayMove(this.props.tasks, oldIndex, newIndex);
    this.props.rearrangeTasks(tasks);
  };

  render() { 
    return (
      <div className='tasksArea'>
        <SortableList tasks={this.props.tasks} onSortEnd={this.onSortEnd} shouldCancelStart={this.shouldCancelStart} />
      </div>
    );
  }
}