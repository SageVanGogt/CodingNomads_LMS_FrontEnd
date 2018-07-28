import React from 'react';
import { shallow } from 'enzyme';
import { TaskEdit, mapStateToProps } from './TaskEdit';
import * as API from './../../apiCalls/apiCalls';
import { mockDocs } from '../../mockData/mockDocs';
import { mockLabs } from '../../mockData/mockLabs';

jest.mock('./../../apiCalls/apiCalls');

describe('TaskEdit', () => {
  let wrapper;
  let mockCurrentTask;

  beforeEach(() => {
    mockCurrentTask = {id: null, name: ''};
    wrapper = shallow(<TaskEdit />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('fetchDocs', () => {
    it('calls getAllDocs', async () => {
      const wrapperInst = wrapper.instance();
      await wrapperInst.fetchDocs();

      expect(API.getAllDocs).toHaveBeenCalled();
    })

    it('sets state with the docs returned from getAllDocs', async () => {
      const wrapperInst = wrapper.instance();
      wrapper.setState({ allDocs: [] })

      await wrapperInst.fetchDocs();

      expect(wrapper.state('allDocs')).toEqual(mockDocs.data);
    })
  })

  describe('fetchLabs', () => {
    it('calls getAllLabs', async () => {
      const wrapperInst = wrapper.instance();
      await wrapperInst.fetchLabs();

      expect(API.getAllLabs).toHaveBeenCalled();
    })

    it('sets state with the labs returned from getAllLabs', async () => {
      const wrapperInst = wrapper.instance();
      await wrapperInst.fetchLabs();

    })
  })


  describe('loadTaskInfo', () => {
    it('should update the appropriate state with info from store', () => {
      let mockTask = {
        id: 1,
        name: 'cats',
        videoLink: 'caden@youtube',
        docs: [],
        labs: []
      };
      let expected = 'caden@youtube';
      wrapper.instance().loadTaskInfo(mockTask);
      let actual = wrapper.state('videoLink');

      expect(actual).toEqual(expected);
    })
  })

  describe('handleInputChange', () => {
    it('should update the appropriate state', () => {
      let mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'videoLink',
          value: 'caden@youtube'
        }
      };
      let expected = 'caden@youtube';
      wrapper.instance().handleInputChange(mockEvent);
      let actual = wrapper.state('videoLink');

      expect(actual).toEqual(expected);
    })
  })

//   describe('handleSubmit', () => {
//     it('should call updateTask with the correct params', async () => {
//       let mockTask = {
//         id: null,
//         name: '',
//         videoLink: '',
//         docs: [],
//         labs: []
//       };
//       let expected = mockTask;
//       await wrapper.instance().handleSubmit();

//       expect(API.updateTask).toHaveBeenCalledWith(expected);
//     })
//   })

  describe('handleDeletedLabs', () => {
    it('should call  with the correct params', async () => {
      let mockLabs = [{}, {}];
      wrapper.setState({labsToDelete: mockLabs});
      let expected = mockLabs;
      await wrapper.instance().handleDeletedLabs();

      expect(API.deleteLabsFromTask).toHaveBeenCalledWith(expected);
    })
  })

  describe('handleDeletedDocs', () => {
    it('should call  with the correct params', async () => {
      let mockDocs = [{}, {}];
      wrapper.setState({docsToDelete: mockDocs});
      let expected = mockDocs;
      await wrapper.instance().handleDeletedDocs();

      expect(API.deleteDocsFromTask).toHaveBeenCalledWith(expected);
    })
  })

  describe('mapStateToProps', () =>  {
    it('should return a state with the currentTask prop', () => {
      let mockState = {
        currentTask: {id: null, name: ''},
        user: {id: 1}
      };
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.currentTask;
      let expected = {id: null, name: ''};

      expect(actual).toEqual(expected);
    })
  })
})
