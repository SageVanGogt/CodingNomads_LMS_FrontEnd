import React from 'react';
import { shallow } from 'enzyme';
import { LabOptions } from './LabOptions';

describe('LabOptions', () => {
  it('matches the snapshot if there is a selectedLab', () => {
    const mockProps = {
      labs: [],
      handleSelectLab: () => {},
      deleteLab: () => {},
      id: 1,
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
      id: 1,
    }
    const wrapper = shallow(<LabOptions { ...mockProps } />)

    expect(wrapper).toMatchSnapshot();

  })

})
