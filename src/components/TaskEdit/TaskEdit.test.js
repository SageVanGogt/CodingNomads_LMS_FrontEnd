import React from 'react';
import { shallow, mount } from 'enzyme';
import { TaskEdit, mapStateToProps, mapDispatchToProps } from './TaskEdit';
import { removeCurrentTask } from '../../actions/currentTask';
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
    // need to figure out how to mock component methods before mount so that I can test that they were called upon mount    
  })

  describe('componentWillUnmount', () => {
    // same as above but on unmount
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
      expect(wrapper.state('docOptions').length).toEqual(0);

      const newDoc = 'mockDoc';
      wrapper.instance().addDocOptions(newDoc);

      expect(wrapper.state('docOptions').length).toEqual(1);
      expect(wrapper.state('docOptions')[0].key).toEqual('doc-1');
    }) 
  })

  describe('addLabOptions', () => {
    it('sets state with a new LabOptions component', () => {
      expect(wrapper.state('labOptions').length).toEqual(0);

      const newLab = 'mockLab';
      wrapper.instance().addLabOptions(newLab);

      expect(wrapper.state('labOptions').length).toEqual(1);
      expect(wrapper.state('labOptions')[0].key).toEqual('lab-1');
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
      const mockDocs = [{ id: 1 }];
      const mockDocOptions = [{ props: { id: 1 } }]
      
      wrapper.setState({ docs: mockDocs, docOptions: mockDocOptions });
      expect(wrapper.state('docs').length).toEqual(1);
      expect(wrapper.state('docOptions').length).toEqual(1);
      expect(wrapper.state('docsToDelete').length).toEqual(0);

      const mockEvent = {
        preventDefault: () => {},
        target: { previousElementSibling: { value: 1 } }
      };
      const mockKey = 1;

      wrapper.instance().deleteDoc(mockEvent, mockKey);

      expect(wrapper.state('docs').length).toEqual(0);
      expect(wrapper.state('docOptions').length).toEqual(0);
      expect(wrapper.state('docsToDelete').length).toEqual(1);
    })

    it('does not set state if there is no docId', () => {
      const mockDocs = [{ id: 1 }];
      const mockDocOptions = [{ props: { id: 1 } }]
      
      wrapper.setState({ docs: mockDocs, docOptions: mockDocOptions });
      expect(wrapper.state('docs').length).toEqual(1);
      expect(wrapper.state('docOptions').length).toEqual(1);
      expect(wrapper.state('docsToDelete').length).toEqual(0);

      const mockEvent = {
        preventDefault: () => {},
        target: { previousElementSibling: { } }
      };
      const mockKey = 1;

      wrapper.instance().deleteDoc(mockEvent, mockKey);

      expect(wrapper.state('docs').length).toEqual(1);
      expect(wrapper.state('docOptions').length).toEqual(1);
      expect(wrapper.state('docsToDelete').length).toEqual(0);

    })
  })

  describe('deleteLab', () => {
    it('sets the state with labs, labOptions, and labsToDelete if there is a labId', () => {
      const mockLabs = [{ id: 1 }];
      const mockLabOptions = [{ props: { id: 1 } }]
      
      wrapper.setState({ labs: mockLabs, labOptions: mockLabOptions });
      expect(wrapper.state('labs').length).toEqual(1);
      expect(wrapper.state('labOptions').length).toEqual(1);
      expect(wrapper.state('labsToDelete').length).toEqual(0);

      const mockEvent = {
        preventDefault: () => {},
        target: { previousElementSibling: { value: 1 } }
      };
      const mockKey = 1;

      wrapper.instance().deleteLab(mockEvent, mockKey);

      expect(wrapper.state('labs').length).toEqual(0);
      expect(wrapper.state('labOptions').length).toEqual(0);
      expect(wrapper.state('labsToDelete').length).toEqual(1);

    })

    it('does not set state if there is no LabId', () => {
      const mockLabs = [{ id: 1 }];
      const mockLabOptions = [{ props: { id: 1 } }]
      
      wrapper.setState({ labs: mockLabs, labOptions: mockLabOptions });
      expect(wrapper.state('labs').length).toEqual(1);
      expect(wrapper.state('labOptions').length).toEqual(1);
      expect(wrapper.state('labsToDelete').length).toEqual(0);

      const mockEvent = {
        preventDefault: () => {},
        target: { previousElementSibling: {  } }
      };
      const mockKey = 1;

      wrapper.instance().deleteLab(mockEvent, mockKey);

      expect(wrapper.state('labs').length).toEqual(1);
      expect(wrapper.state('labOptions').length).toEqual(1);
      expect(wrapper.state('labsToDelete').length).toEqual(0);
    })
  })

  describe('detemineSubmitMethod', () => {
    it('calls patchTask if there is a currentTask id', () => {
      const mockEvent = { preventDefault: () => {} };
      mockCurrentTask.id = 1; 
      wrapper = shallow(<TaskEdit currentTask={ mockCurrentTask }/>);
      const wrapperInst = wrapper.instance();
      wrapperInst.patchTask = jest.fn();
      
      wrapperInst.determineSubmitMethod(mockEvent);

      expect(wrapperInst.patchTask).toHaveBeenCalled();
    })

    it('calls postNewTask if there is not a currentTask id', () => {
      const mockEvent = { preventDefault: () => {} };
      const wrapperInst = wrapper.instance();
      wrapperInst.postNewTask = jest.fn();
      
      wrapperInst.determineSubmitMethod(mockEvent);

      expect(wrapperInst.postNewTask).toHaveBeenCalled();
    })
  })

  describe('postNewTask', () => {
    it('calls API.postTask with the task', () => {
      const expected = { 
        name: '', 
        description: '', 
        videoLink: '', 
        docs: [], 
        labs: [] 
      };

      wrapper.instance().postNewTask();

      expect(API.postTask).toHaveBeenCalledWith(expected)
    })  
  })

  describe('patchTask', () => {
    it('calls API.updateTask with the updated task', () => {
      const wrapperInst = wrapper.instance();
      wrapperInst.handleDeletedDocs = jest.fn();
      wrapperInst.handleDeletedLabs = jest.fn();
      const expected = { 
        id: null,
        name: '', 
        description: '', 
        videoLink: '', 
        docs: [], 
        labs: [] 
      };

      wrapperInst.patchTask();

      expect(API.updateTask).toHaveBeenCalledWith(expected)
    })

    it('calls handleDeletedDocs', async () => {
      const wrapperInst = wrapper.instance();
      wrapperInst.handleDeletedDocs = jest.fn();
      wrapperInst.handleDeletedLabs = jest.fn();

      await wrapperInst.patchTask();

      expect(wrapperInst.handleDeletedDocs).toHaveBeenCalled();
    })

    it('calls handleDeletedLabs', async () => {
      const wrapperInst = wrapper.instance();
      wrapperInst.handleDeletedDocs = jest.fn();
      wrapperInst.handleDeletedLabs = jest.fn();

      await wrapperInst.patchTask();

      expect(wrapperInst.handleDeletedLabs).toHaveBeenCalled();
    })
  })

  describe('handleDeletedDocs', () => {
    it('calls deleteDocsFromTask with the correct params', async () => {
      let mockDocs = [{}, {}];
      wrapper.setState({docsToDelete: mockDocs});
      let expected = mockDocs;
      await wrapper.instance().handleDeletedDocs();

      expect(API.deleteDocsFromTask).toHaveBeenCalledWith(expected);
    })
  })

  describe('handleDeletedLabs', () => {
    it('calls deleteLabsFromTask with the correct params', async () => {
      let mockLabs = [{}, {}];
      wrapper.setState({labsToDelete: mockLabs});
      let expected = mockLabs;
      await wrapper.instance().handleDeletedLabs();

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

  describe('mapDispatchToProps', () => {
    it('calls dispatch with the correct arguments', () => {
      const dispatch = jest.fn();
      const mappedProps = mapDispatchToProps(dispatch)

      mappedProps.removeCurrentTask();

      expect(dispatch).toHaveBeenCalledWith(removeCurrentTask())
    })

  })
})
