import React from 'react';
import { shallow } from 'enzyme';
import { Courses } from './Courses';

describe('TaskCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Courses />, { disableLifecycleMethods: true });
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
