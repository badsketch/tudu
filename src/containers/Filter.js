import React, { useState } from 'react';
import './Filter.css'
import { connect } from 'react-redux';
import { 
    FilterByComplete,
    FilterByIncomplete,
    FilterByUser,
    ResetFilter
} from '../store/filterActions';

function Filter(props) {

    const [filterUserId, setUserFilter] = useState(1)
    const handleSelectChange = e => {
        setUserFilter(parseInt(e.target.value));
        props.dispatch(FilterByUser(filterUserId));
    }

    return (
        <div id="visibility-filter">
            <input type="radio" name="general" value="all" 
            onClick={() => props.dispatch(ResetFilter())}/>All
            <input type="radio" name="general" value="complete" 
                onClick={() => props.dispatch(FilterByComplete())}/>Complete
            <input type="radio" name="general" value="incomplete" 
                onClick={() => props.dispatch(FilterByIncomplete())}/>Incomplete
            <select onChange={handleSelectChange}>
                {
                    props.userList.map(([id, { username, color }]) => {
                        return (
                            <option
                                key={id}
                                value={id}
                            >
                                {username}
                            </option>

                        )
                    })
                }
            </select>
        </div>
    )
}

function mapStateToProps(state) {
    const userList = Object.entries(state.users);
    return {
        userList
    }
}

export default connect(mapStateToProps)(Filter);