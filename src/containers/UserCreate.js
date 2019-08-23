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
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (username !== "") {
            props.dispatch(AddUser(username, profileColor));
            setUsername("")
        }
    }

    const handleClose = () => {
        setDisplayPicker(false);
    }

    const handleOpen = () => {
        setDisplayPicker(true);
    }

    const popover = {
        position: 'absolute',
        zIndex: '2',
    }

    const cover = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
    }

    return (
        <div id="user-create">
        <form id="user-create-form">
            <input type="text" value={username} onChange={handleChange}/>
            <input type="button" value="color" onClick={handleOpen} />
            {
                displayPicker &&
                <div style={popover}>
                    <div style={cover} onClick={handleClose}/>
                    <TwitterPicker triangle="hide" onChangeComplete={handleColorPick} color={profileColor}/>
                </div>
            }
            <input type="submit" value="Add User" onClick={handleSubmit} />
        </form>
        </div>
    )

}

export default connect()(UserCreate);