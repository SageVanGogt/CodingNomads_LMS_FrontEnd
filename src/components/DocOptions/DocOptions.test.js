import React from 'react';
import { shallow } from 'enzyme';
import { DocOptions } from './DocOptions';

describe('DocOptions', () => {
  it('matches the snapshot if there is a selectedDoc', () => {
    const mockProps = {
      docs: [],
      handleSelectDoc: () => {},
      deleteDoc: () => {},
      id: 1,
      docSelected: { id: 1 }
    }
    const wrapper = shallow(<DocOptions { ...mockProps } />)

    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot if there is not a selectedDoc', () => {
    const mockProps = {
      docs: [],
      handleSelectDoc: () => {},
      deleteDoc: () => {},
      id: 1,
    }
    const wrapper = shallow(<DocOptions { ...mockProps } />)

    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot if a array of docs is passed in', () => {
    const mockProps = {
      docs: [{ id: 1, topic: 'doc topic' }],
      handleSelectDoc: () => {},
      deleteDoc: () => {},
      id: 1,
      docSelected: { id: 1 }
    }
    const wrapper = shallow(<DocOptions { ...mockProps } />)

    expect(wrapper).toMatchSnapshot();
  })

})
