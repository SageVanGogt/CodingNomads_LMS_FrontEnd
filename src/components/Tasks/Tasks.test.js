import React from 'react';
import { shallow } from 'enzyme';
import { Tasks, mapDispatchToProps } from './Tasks';

describe('Tasks', () => {
  let wrapper;
  let mockProps = {
    updateCurrentTask: jest.fn(),
    history: { push: jest.fn() }
  }

  beforeEach(() => {
    wrapper = shallow(<Tasks {...mockProps} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('addTask', () => {
    it('calls postTask', () => {

    })

    it('calls this.props.updateCurrentTask with the correct arguments', () => {
      
    })

    it ('calls this.props.history.push with the correct arguments', () => {

    })
  })

  describe('mapDispatchToProps', () => {

  })
});
