import React from 'react';
import { shallow } from 'enzyme';
import { LabOptions } from './LabOptions';

describe('LabOptions', () => {
  it('matches the snapshot if there is a selectedLab', () => {
    const mockProps = {
      labs: [],
      handleSelectLab: () => {},
      deleteLab: () => {},
      id: '1',
      labSelected: { id: 1 }
    }
    const wrapper = shallow(<LabOptions { ...mockProps } />)

    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot if there is not a selectedLab', () => {
    const mockProps = {
      labs: [],
      handleSelectLab: () => {},
      deleteLab: () => {},
      id: '1',
    }
    const wrapper = shallow(<LabOptions { ...mockProps } />)

    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot if a array of labs is passed in', () => {
    const mockProps = {
      labs: [{ id: 1, topic: 'lab topic' }],
      handleSelectLab: () => {},
      deleteLab: () => {},
      id: '1',
      labSelected: { id: 1 }
    }
    const wrapper = shallow(<LabOptions { ...mockProps } />)

    expect(wrapper).toMatchSnapshot();
  })



})
