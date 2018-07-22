import React from 'react';
import { shallow } from 'enzyme';
import { Tasks } from './Tasks';

describe('TaskCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Tasks />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});