import React from 'react'
import PropTypes from 'prop-types';

const ItemLink = ({active, children, onFilterChange}) => {
    
    return(
     active ? <span> {children} </span> : <button  onClick={e => {e.preventDefault(); onFilterChange()}}>{children}</button>
    )
}

ItemLink.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onFilterChange: PropTypes.func.isRequired 
  };

export default ItemLink