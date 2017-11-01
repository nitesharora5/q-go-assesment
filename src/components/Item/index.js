import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item, onToggle, onDelete }) => {
    return(
        <li  onClick={() => {
            item.id && onToggle(item.id);  
          }} className={item.completed?"done":"to-be-done"}>{item.content}<span className='delete-item' onClick={() => {
            item.id && onDelete(item.id);}}> X </span></li>
    )
};

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired 
  };

export default Item