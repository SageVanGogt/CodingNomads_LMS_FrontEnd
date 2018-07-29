import { createStore } from 'redux';
import { rootReducer } from './index.js';
import signinReducer from './signinReducer';
import { currentTaskReducer } from './currentTaskReducer';
import { currentCourseReducer } from './currentCourseReducer';

describe('reducers', () => {
  it('creates initial state', () => {
    let store = createStore(rootReducer)

    expect(store.getState().user).toEqual(signinReducer(undefined, {}));
    expect(store.getState().currentTask).toEqual(currentTaskReducer(undefined, {}));
    expect(store.getState().currentCourse).toEqual(currentCourseReducer(undefined, {}));
  })
})
