export const CHANGE_VISIBILITY_FILTER = 'qgo/assessment/CHANGE_VISIBILITY_FILTER';

export const changeVisibilityFilter = filter => {
    return { type: CHANGE_VISIBILITY_FILTER , filter }
  }

  export const initialState = 'ALL'
  

const visibilityFilterReducer = (state = initialState, action) =>{
    switch(action.type){
        case CHANGE_VISIBILITY_FILTER:
            return action.filter
        default:
        return state;
    }
};

export default visibilityFilterReducer;