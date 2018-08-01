import React, { Component } from 'react';
import { 
  SortableContainer, 
  SortableElement, 
  arrayMove 
} from 'react-sortable-hoc';
import { CourseTaskCard } from '../CourseTaskCard/CourseTaskCard';
import PropTypes from 'prop-types';

const SortableItem = SortableElement(({ task, deleteTask }) =>
  <CourseTaskCard {...task} deleteTask={deleteTask}/>
);

const SortableList = SortableContainer(({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <SortableItem 
          key={`item-${index}`} 
          index={index} task={task} 
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
});

export class CourseTaskContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  shouldCancelStart = (event) => {
    if (
      ['input', 'textarea', 'select', 'option', 'img', 'image']
        .indexOf(event.target.tagName.toLowerCase()) !== -1
    ) {
      return true; 
    }
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    let tasks = arrayMove(this.props.tasks, oldIndex, newIndex);
    this.props.rearrangeTasks(tasks);
  };

  render() { 
    return (
      <div className='tasksArea'>
        <SortableList 
          tasks={this.props.tasks} 
          onSortEnd={this.onSortEnd} 
          shouldCancelStart={this.shouldCancelStart} 
          deleteTask={this.props.deleteTask} 
        />
      </div>
    );
  }
}

CourseTaskContainer.propTypes = {
  tasks: PropTypes.array,
  rearrangeTasks: PropTypes.func,
  deleteTask: PropTypes.func
};
