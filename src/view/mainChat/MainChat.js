import React from "react";
import InputSendMessage from "./mainChatComponents/InputSendMessage";
import UserInfo from "./mainChatComponents/UserInfo";
import MainChatWithUser from "./mainChatComponents/MainChatWithUser";
import {useSelector} from "react-redux";
import classes from "./mainChat.module.css";

const MainChat = () => {
    const user = useSelector(state => state.reducerUsers.users.find(user => user.isActive));
    return (
        <div className={classes.mainChat}>
            <UserInfo name={user.user} isOnline={user.isOnline} icon={user.icon}/>
            <MainChatWithUser messages={user.messages} icon={user.icon} date={user.date}/>
            <InputSendMessage id={user.id}/>
        </div>
    );
};

export default MainChat;