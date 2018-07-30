import React from 'react';
import { shallow } from 'enzyme';
import {CourseTaskContainer} from './CourseTaskContainer';

describe('CourseTaskContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CourseTaskContainer />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});