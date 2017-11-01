import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item'
import './styles.css';

export const ItemsList = ({ items, onToggle, onDelete }) => {
  return (
    <div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {items.map(item => <Item key={item.id} item={item} onToggle={onToggle} onDelete= {onDelete} /> )}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired 
};