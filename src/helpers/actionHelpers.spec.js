import {createAction} from './actionHelpers';

describe("createAction test", () => {
  it("should create correct type constant and action", () => {
    const TEST_ACTION = 'TEST_ACTION';
    const payload = 'asdf';
    expect(createAction(TEST_ACTION)(payload)).toEqual({ type: TEST_ACTION, payload });
  });
});
