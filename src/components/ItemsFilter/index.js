import React from 'react'
import ItemsFilterLink from '../ItemsFilterLink'

const ItemsFilter = () => {

    return(
    <div>
        Filter:   <ItemsFilterLink filter='ALL'>All</ItemsFilterLink>{'  '}
                    <ItemsFilterLink filter='ACTIVE'>Active</ItemsFilterLink> {'  '}
                    <ItemsFilterLink filter='COMPLETED'>Completed</ItemsFilterLink> {'  '}
    </div>
    )
}

export default ItemsFilter




