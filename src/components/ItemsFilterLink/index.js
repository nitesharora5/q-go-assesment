import { connect } from 'react-redux';
import {changeVisibilityFilter} from '../../logic/visibilityFilter'
import ItemLink from '../ItemLink'

const mapStateToProps = (state, ownProps) => {
    return{
        active : ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        onFilterChange : () => dispatch(changeVisibilityFilter(ownProps.filter))
    }
}

const ItemsFilterLink = connect(mapStateToProps,mapDispatchToProps)(ItemLink);

export default ItemsFilterLink