import React from 'react';
import { shallow } from 'enzyme';
import Students from './Students';

describe('Students', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Students />);
    expect(wrapper).toMatchSnapshot();
  })
})
