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
      {tasks.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} task={...value} />
      ))}
    </ul>
  );
});

export class CourseTaskContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: this.props.tasks
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      tasks: arrayMove(this.state.tasks, oldIndex, newIndex)
    });
  };

  render() { 
    return (
      <div className='tasksArea'>
        <SortableList tasks={this.props.tasks} onSortEnd={this.onSortEnd} />
      </div>
    );
  }
}