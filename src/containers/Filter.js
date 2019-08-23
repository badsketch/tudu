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

    // const handleSelectChange = e => {
    //     console.log(e.target.value);
    //     const userId = parseInt(e.target.value);
    //     setUserFilter(userId);
    //     props.dispatch(FilterByUser(userId));
    // }

    const handleSelectChange = (userId) => {
        // const userId = parseInt(e.target.value);
        setUserFilter(userId);
        props.dispatch(FilterByUser(userId));
    }

    return (
        <div id="visibility-filter">
            Status: 
            <input type="radio" name="general" value="all" 
            onClick={() => props.dispatch(ResetFilter())}/>All
            <input type="radio" name="general" value="complete" 
                onClick={() => props.dispatch(FilterByComplete())}/>Complete
            <input type="radio" name="general" value="incomplete" 
                onClick={() => props.dispatch(FilterByIncomplete())}/>Incomplete
            {/* <select onChange={handleSelectChange}>
                <option key={-1} value={-1}>-</option>
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
            </select> */}
            <div className="user-filter">
                User: 
            {
                props.userList.map(([id, { username, color }]) => {
                    return ( 
                    <div 
                        key={id}
                        className="user-dot"
                        style={{ 
                            background: color,
                            border: filterUserId == id ? '1px solid black' : ''
                         }}
                        onClick={() => handleSelectChange(parseInt(id))}></div>
                    )
                })
            }
            </div>
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