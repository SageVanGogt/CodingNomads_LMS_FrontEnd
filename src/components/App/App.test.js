import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('matches the snapshot', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
