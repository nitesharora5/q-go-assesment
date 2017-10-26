import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {toggleItem, deleteItem} from '../../logic/todos'
import './styles.css';

export const ItemsList = ({ items, onToggle, onDelete }) => {
  return (
    <div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {items.map(item => <li key={item.id} onClick={() => {
          item.id && onToggle(item.id);  
        }} className={item.completed?"done":"to-be-done"}>{item.content}<span className='delete-item' onClick={() => {
          item.id && onDelete(item.id);}}> X </span></li>)}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired 
};

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
