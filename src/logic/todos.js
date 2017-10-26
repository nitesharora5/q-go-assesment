export const ADD_ITEM = 'qgo/assessment/ADD_ITEM';
export const TOGGLE_ITEM = 'qgo/assessment/TOGGLE_ITEM'
export const DELETE_ITEM = 'qgo/assessment/DELETE_ITEM'

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export const toggleItem = itemId => {
  return { type: TOGGLE_ITEM, itemId}
}

export const deleteItem = itemId => {
  return { type: DELETE_ITEM, itemId}
}

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', completed: false },
    { id: 2, content: 'Buy cat food' , completed: false},
    { id: 3, content: 'Water the plants', completed: false },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
        completed: false
      };
      return {
        ...state,
        items: [...state.items, newItem],
      };

      case TOGGLE_ITEM:
        const updatedItems = state.items.map(item => {
          if(item.id === action.itemId){
            item.completed = !item.completed
          }
          return item;
        })
      return{
        ...state,
        items: updatedItems
      }

      case DELETE_ITEM:
      const remainingItems = state.items.filter(item => item.id !== action.itemId)
      return{
        ...state,
        items: remainingItems
      }

    default:
      return state;
  }
};

export default reducer;
