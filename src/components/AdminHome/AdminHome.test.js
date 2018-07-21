import React from 'react';
import { shallow } from 'enzyme';
import { AdminHome, mapDispatchToProps } from './AdminHome';

describe('AdminHome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AdminHome />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});