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

  it('should update email state when an input field is changed', () => {
    const emailField = wrapper.find('.LogIn__email');
    emailField.simulate('change', {target: {
      value: 'chad@coding.com'
    }});

    expect(wrapper.state().email).toEqual('chad@coding.com');
  });

  it('should update password state when an input field is changed', () => {
    const emailField = wrapper.find('.LogIn__password');
    emailField.simulate('change', {
      target: {
        value: 'chadIsRad'
      }
    });

    expect(wrapper.state().password).toEqual('chadIsRad');
  });
});