import axios from "axios";
import {setAddNewMessage} from "../store/reducerUsers";

export const getAnswer = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://api.chucknorris.io/jokes/random",{});
            const newMes = {
                text: response.data.value,
                date: Date.now(),
                isMine: false,
            };
            dispatch(setAddNewMessage({newMes, id}));
        } catch (e) {
            console.error(e);
        }
    }
}
