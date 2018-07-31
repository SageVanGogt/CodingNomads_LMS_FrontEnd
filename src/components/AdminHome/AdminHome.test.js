import React from 'react';
import { shallow } from 'enzyme';
import { AdminHome, mapDispatchToProps } from './AdminHome';

describe('AdminHome', () => {
  let wrapper;
  let mockHistory;
  let mockEvent;

  beforeEach(() => {
    mockEvent = {
      target: {
        id: 'COURSES'
      }
    };
    mockHistory = {
      push: jest.fn()
    };
    wrapper = shallow(<AdminHome event={mockEvent} history={mockHistory}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
  
  describe('handleRoute', () => {
    it('should call push on history with the correct params, to redirect the page', () => {
      let expected = '/courses';
      wrapper.instance().handleRoute(mockEvent);

      expect(mockHistory.push).toHaveBeenCalledWith(expected);
    })
  })
  
});