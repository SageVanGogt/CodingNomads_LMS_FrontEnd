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
    mockCurrentTask = { 
      id: null, 
      name: '',
      videoLink: '',
      docs: [],
      labs: []
    };
    wrapper = shallow(<TaskEdit currentTask={ mockCurrentTask }/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('componentDidMount', () => {

  })

  describe('componentWillUnmount', () => {

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

      expect(wrapper.state('allDocs').length).toEqual(0);

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
      wrapper.setState({ allLabs: [] })

      expect(wrapper.state('allLabs').length).toEqual(0);

      await wrapperInst.fetchLabs();

      expect(wrapper.state('allLabs')).toEqual(mockLabs.data);
    })
  })

  describe('addDocOptions', () => {
    it('sets state with a new DocOptions component', () => {

    }) 
  })

  describe('addLabOptions', () => {
    it('sets state with a new LabOptions component', () => {

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

  describe('handleSelectDoc', () => {
    it('sets state with the doc if the doc is not yet in state', () => {
      let mockEvent = {
        preventDefault: jest.fn(),
        target: { value: 1 }
      };
      expect(wrapper.state('docs').length).toEqual(0);

      wrapper.instance().handleSelectDoc(mockEvent)

      expect(wrapper.state('docs')[0].id).toEqual(1)
    })

    it('does not set state if the doc is already in state', () => {
      wrapper.setState({ docs: [{ id: 1 }] });
      let mockEvent = {
        preventDefault: jest.fn(),
        target: { value: 1 }
      };

      expect(wrapper.state('docs')[0].id).toEqual(1)
      expect(wrapper.state('docs').length).toEqual(1);

      wrapper.instance().handleSelectDoc(mockEvent)

      expect(wrapper.state('docs')[0].id).toEqual(1)
      expect(wrapper.state('docs').length).toEqual(1);
    })
  })


  describe('handleSelectLab', () => {
    it('sets state with the lab if the lab is not yet in state', () => {
      let mockEvent = {
        preventDefault: jest.fn(),
        target: { value: 1 }
      };
      expect(wrapper.state('labs').length).toEqual(0);

      wrapper.instance().handleSelectLab(mockEvent)

      expect(wrapper.state('labs')[0].id).toEqual(1)
    })

    it('does not set state if the lab is already in state', () => {
      wrapper.setState({ labs: [{ id: 1 }] });
      let mockEvent = {
        preventDefault: jest.fn(),
        target: { value: 1 }
      };

      expect(wrapper.state('labs')[0].id).toEqual(1)
      expect(wrapper.state('labs').length).toEqual(1);

      wrapper.instance().handleSelectLab(mockEvent)

      expect(wrapper.state('labs')[0].id).toEqual(1)
      expect(wrapper.state('labs').length).toEqual(1);
    })
  })

  describe('deleteDoc', () => {
    it('sets the state with docs, docOptions, and docsToDelete if there is a docId', () => {

    })
  })

  describe('deleteLab', () => {
    it('sets the state with labs, labOptions, and labsToDelete if there is a labId', () => {

    })
  })

  describe('detemineSubmitMethod', () => {
    it('calls patchTask if there is a currentTask id', () => {

    })

    it('calls postNewTask if there is not a currentTask id', () => {

    })
  })

  describe('postNewTask', () => {
    it('calls API.postTask with the task', () => {

    })  
  })

  describe('patchTask', () => {
    it('calls API.updateTask with the updated task', () => {

    })

    it('calls deleteDocsInDatabase', () => {

    })

    it('calls deleteLabsInDatabase', () => {

    })
  })

  describe('deleteDocsInDatabase', () => {
    it('calls deleteDocsFromTask with the correct params', async () => {
      let mockDocs = [{}, {}];
      wrapper.setState({docsToDelete: mockDocs});
      let expected = mockDocs;
      await wrapper.instance().deleteDocsInDatabase();

      expect(API.deleteDocsFromTask).toHaveBeenCalledWith(expected);
    })
  })

  describe('deleteLabsInDatabase', () => {
    it('calls deleteLabsFromTask with the correct params', async () => {
      let mockLabs = [{}, {}];
      wrapper.setState({labsToDelete: mockLabs});
      let expected = mockLabs;
      await wrapper.instance().deleteLabsInDatabase();

      expect(API.deleteLabsFromTask).toHaveBeenCalledWith(expected);
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
