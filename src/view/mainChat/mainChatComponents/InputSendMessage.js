import React, {useState} from "react";
import classes from "../mainChat.module.css";
import {useDispatch} from "react-redux";
import {setAddNewMessage} from "../../../store/reducerUsers";
import {getAnswer} from "../../../actions/actions";

const InputSendMessage = ({id}) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    function sendMessage() {
        if(value) {
            const newMes = {
                text: value,
                date: Date.now(),
                isMine: true,
            }

            dispatch(setAddNewMessage({newMes, id}));

            setTimeout(() => {
                dispatch(getAnswer(id));
            }, 10000)

            setValue("");
        }
    }

    function handleKeypress (event) {
        if (event.charCode === 13) {
            sendMessage();
        }
    }

    return (
        <div className={classes.form}>
            <input value={value}
                   className={classes.input}
                   onChange={(event => setValue(event.target.value))}
                   onKeyPress={(event) => handleKeypress(event)}/>
            <div onClick={() => sendMessage()} className={classes.btn}>➤</div>
        </div>
    );
};

export default InputSendMessage;