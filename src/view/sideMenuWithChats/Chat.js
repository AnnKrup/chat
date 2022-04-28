import React, {useMemo} from "react";
import classes from "./sideMenuWithChats.module.css";
import {useDispatch} from "react-redux";
import {setChangeActiveChat} from "../../store/reducerUsers";
import moment from "moment";
import UserIcon from "./UserIcon";

const Chat = ({user}) => {
    const dispatch = useDispatch();

    const date = useMemo(() => {
        if(user.messages[user.messages.length - 1]){
            return moment(Number(user.messages[user.messages.length - 1].date)).format('ll');
        } else {
            return '';
        }
    }, [user]);

    function changeActiveChat(id) {
        dispatch(setChangeActiveChat(id))
    }

    return (
        <div className={classes.chat} onClick={() => changeActiveChat(user.id)}>
           <UserIcon icon={user.icon} isOnline={user.isOnline}/>
            <div className={classes.chatInfo}>
                <div className={classes.chatUserInfo}>
                    <div className={classes.chatUserName}>{user.user}</div>
                    <div className={classes.chatUserMessage}>{user.messages[user.messages.length - 1] && user.messages[user.messages.length - 1].text}</div>
                </div>
                <div className={classes.chatUserDate}>{date}</div>
            </div>
        </div>
    );
};

export default Chat;