import React from 'react';
import { shallow } from 'enzyme';
import { TaskCard, mapStateToProps } from './TaskCard';

describe('TaskCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskCard />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    it('should return a state of the user', () => {
      let mockState = {
        tasks: [{}, {}],
        user: {id: 1, roleId: 1}
      };
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.user;
      let expected = {id: 1, roleId: 1};

      expect(actual).toEqual(expected);
    })
  })
})