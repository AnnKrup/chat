import React from "react";
import Chat from "./Chat";
import classes from "./sideMenuWithChats.module.css";

const ListOfChats = ({newUsers}) => {
    return (
        <div className={classes.listOfChatsWrapper}>
            <div className={classes.listOfChatsTitle}>Chats</div>
            {newUsers.length ?
                <div className={classes.listOfChats}>
                    {newUsers.sort((a,b) => b.lastMessageDate - a.lastMessageDate).map(user =>
                        <Chat user={user} key={user.id}/>
                    )}
                </div>
                :<div className={classes.listOfChatsEmpty}>Nothing found!</div>}
        </div>
    );
};

export default ListOfChats;