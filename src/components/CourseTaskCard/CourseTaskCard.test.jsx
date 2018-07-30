import React from 'react';
import { shallow } from 'enzyme';
import { CourseTaskCard } from './CourseTaskCard';

describe('CourseTaskCard', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<CourseTaskCard />)

    expect(wrapper).toMatchSnapshot();
  });
});
