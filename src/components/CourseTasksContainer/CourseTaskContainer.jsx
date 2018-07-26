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

  onSortEnd = ({ oldIndex, newIndex }) => {
    let tasks;

    if (this.state.tasks.length !== 0) {
      tasks = arrayMove(this.state.tasks, oldIndex, newIndex);
    } else {
      tasks = arrayMove(this.props.tasks, oldIndex, newIndex);
    }
    this.setState({ tasks });
  };

  render() { 
    return (
      <div className='tasksArea'>
        {
          this.state.tasks.length > 0 ? 
            <SortableList tasks={this.state.tasks} onSortEnd={this.onSortEnd} />
            : <SortableList tasks={this.props.tasks} onSortEnd={this.onSortEnd} />
        }
      </div>
    );
  }
}