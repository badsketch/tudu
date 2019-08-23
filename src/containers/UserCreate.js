import React, { useState } from 'react';
import './UserCreate.css';
import { AddUser } from 'store/userActions';
import { TwitterPicker } from 'react-color';
import { connect } from 'react-redux';

function UserCreate(props) {
    
    const [username, setUsername] = useState("");
    const [profileColor, setColor] = useState("#eeeeee");

    const [displayPicker, setDisplayPicker] = useState(false);


    const handleChange = e => {
        setUsername(e.target.value);
    }

    const handleColorPick = (color, event) => {
        setColor(color.hex);
        setDisplayPicker(!displayPicker);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (username !== "") {
            props.dispatch(AddUser(username, profileColor));
            setUsername("")
        }
    }

    const togglePicker = () => {
        setDisplayPicker(!displayPicker);
    }

    const popover = {
        position: 'absolute',
        zIndex: '2',
    }

    return (
        <div id="user-create">
        <form id="user-create-form">
            <input type="text" value={username} onChange={handleChange}/>
            <div className="color-picker" onClick={togglePicker}>
                <div className="swatch" style={{backgroundColor: profileColor }} />
            </div>
            {
                displayPicker &&
                <div style={popover}>
                    <TwitterPicker triangle="hide" onChangeComplete={handleColorPick} color={profileColor}/>
                </div>
            }
            <input type="submit" value="Add User" onClick={handleSubmit} />
        </form>
        </div>
    )

}

export default connect()(UserCreate);