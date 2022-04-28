import React from "react";
import classes from "../mainChat.module.css";
import UserIcon from "../../sideMenuWithChats/UserIcon";

const UserInfo = ({name, isOnline, icon}) => {
    return (
        <div className={classes.userInfo}>
            <UserIcon icon={icon} isOnline={isOnline}/>
            <strong>{name}</strong>
        </div>
    );
};

export default UserInfo;