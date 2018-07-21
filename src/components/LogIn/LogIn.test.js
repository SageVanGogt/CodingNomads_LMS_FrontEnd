import React from 'react';
import { shallow } from 'enzyme';
import { LogIn } from './LogIn';

describe('LogIn', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LogIn/>);
  });

  it('should match snapshot with default state', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with userbase of admin in state', () => {
    wrapper.setState({userbase: 'admin'});

    expect(wrapper).toMatchSnapshot();
  });
});