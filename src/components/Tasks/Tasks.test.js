import React from 'react';
import { shallow } from 'enzyme';
import { Tasks, mapDispatchToProps } from './Tasks';

describe('Tasks', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Tasks />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('addTask', () => {

  })

  describe('mapDispatchToProps', () => {

  })
});
