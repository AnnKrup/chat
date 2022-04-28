import React, {useEffect, useRef} from "react";
import classes from "../mainChat.module.css";
import moment from "moment";

const MainChatWithUser = ({messages, icon, date}) => {
    const newDate = moment(date).format('L') + " " + moment(date).format('LT');
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    };

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    return (
        <div className={classes.chat}>
            {messages && messages.map((message, index) =>
                <div key={index}>
                    {message.isMine
                    ?
                        <div className={classes.mainUserMessage}>
                            <div className={classes.mainUserMessageText}>{message.text}</div>
                            <div className={classes.messageDate}>{newDate}</div>
                        </div>

                    :
                        <div className={classes.userMessageWrapper}>
                                <div className={classes.userMessageImgWrapper}>
                                    <img src={icon} className={classes.userMessageImg} alt="icon"/>
                                </div>
                                <div className={classes.userMessage}>
                                    <div className={classes.userMessageText}>{message.text}</div>
                                    <div className={classes.messageDate}>{newDate}</div>
                                </div>
                    </div>
                    }
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default MainChatWithUser;