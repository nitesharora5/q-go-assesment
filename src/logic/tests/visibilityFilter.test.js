import visibilityFilterReducer, { initialState, changeVisibilityFilter} from '../visibilityFilter'

describe('visibilityFilterReducer', () => {
    it('should return state for unknown action', () => {
      const mockState = { test: 'testState' };
      const mockAction = { type: 'testAnyAction' };
      const result = visibilityFilterReducer(mockState, mockAction);
      expect(result).toEqual(mockState);
    });
  
    it('should use initial state if state not provided', () => {
      const mockAction = { type: 'testAnyAction' };
      const result = visibilityFilterReducer(undefined, mockAction);
      expect(result).toEqual(initialState);
    });

    it('should return a valid visibilityFilter on changeVisibilityFilter action', () => {
        const state = 'ALL'
        const mockAction = changeVisibilityFilter('ACTIVE')
        const result = visibilityFilterReducer(state,mockAction)
        expect(result).toEqual('ACTIVE')
    });

});