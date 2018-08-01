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
    const usernameField = wrapper.find('.LogIn__username');
    usernameField.simulate('change', {target: {
      value: 'chad@coding.com'
    }});

    expect(wrapper.state().username).toEqual('chad@coding.com');
  });

  it('should update password state when an input field is changed', () => {
    const passwordField = wrapper.find('.LogIn__password');
    passwordField.simulate('change', {
      target: {
        value: 'chadIsRad'
      }
    });

    expect(wrapper.state().password).toEqual('chadIsRad');
  });

  it('should reset username and password state on submit', async () => {
    // NOTE: need to figure out how to check that the state was set asynchronously
    
    // const emailField = wrapper.find('.LogIn__email');
    // const passwordField = wrapper.find('.LogIn__password');
    // passwordField.simulate('change', { target: { value: 'chadIsRad'}});
    // emailField.simulate('change', { target: { value: 'chad@coding.com' }});

    // wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });

    // expect(wrapper.state().email).toEqual('');
    // expect(wrapper.state().password).toEqual('');
  });
});
