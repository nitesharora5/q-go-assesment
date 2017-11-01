import { connect } from 'react-redux';
import {toggleItem, deleteItem} from '../../logic/todos'
import {ItemsList} from '../ItemsList'

const getFilteredTodoItems = (todos, filter) => {
    switch (filter) {
      case 'ALL':
        return todos
      case 'COMPLETED':
        return todos.filter(t => t.completed)
      case 'ACTIVE':
        return todos.filter(t => !t.completed)
        default : return todos
    }
  }
  
  const mapStateToProps = state => {
    return { items: getFilteredTodoItems(state.todos.items , state.visibilityFilter)};
  };
  
  const mapDispatchToProps = dispatch =>{
    return{
      onToggle: itemId => dispatch(toggleItem(itemId)),
      onDelete: itemId => dispatch(deleteItem(itemId))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(ItemsList);
  