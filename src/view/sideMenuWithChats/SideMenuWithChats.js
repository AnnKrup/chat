import React, {useEffect, useState} from "react";
import classes from "./sideMenuWithChats.module.css";
import UserIcon from "./UserIcon";
import InputSearchChat from "./InputSearchChat";
import ListOfChats from "./ListOfChats";
import {useSelector} from "react-redux";

const SideMenuWithChats = () => {
    const users = useSelector(state => state.reducerUsers.users);
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        setNewUsers(users);
    }, [users])

    function findUsers(event) {
        setNewUsers(users.filter(user => user.user.toLowerCase().includes(event.target.value)));
    }

    return (
        <div className={classes.sideMenu}>
            <UserIcon icon={"./usersIcons/myIcon.png"} isOnline={true}/>
            <InputSearchChat newUsers={newUsers} findUsers={findUsers}/>
            <ListOfChats newUsers={newUsers}/>
        </div>
    );
};

export default SideMenuWithChats;