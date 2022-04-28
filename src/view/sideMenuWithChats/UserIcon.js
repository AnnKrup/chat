import React from "react";
import classes from "./sideMenuWithChats.module.css";

const UserIcon = ({icon, isOnline}) => {
    return (
        <div className={classes.userIcon}>
            <div className={classes.iconWrapper}>
                <img src={icon} className={classes.icon} alt="icon"/>
            </div>
            {isOnline &&
                <div className={classes.iconIsOnlineWrapper}>
                    <img src="./usersIcons/isOnline.png" className={classes.iconIsOnline} alt="isOnline"/>
                </div>
            }
        </div>
    );
};

export default UserIcon;