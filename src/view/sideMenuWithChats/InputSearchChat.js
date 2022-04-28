import React from "react";
import classes from "./sideMenuWithChats.module.css";

const InputSearchChat = ({findUsers}) => {
    return (
        <div className={classes.inputWrapper}>
            <input className={classes.input}
                   placeholder="🔎 Search or start new chat"
                   onChange={(event) => findUsers(event)}/>
        </div>
    );
};

export default InputSearchChat;