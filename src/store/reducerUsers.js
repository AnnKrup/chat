const SET_CHANGE_ACTIVE_CHAT = "SET_CHANGE_ACTIVE_CHAT";
export const SET_ADD_NEW_MESSAGE = "SET_ADD_NEW_MESSAGE";

const initialState = {
    activeChat: undefined,
    users: [
        {user: "Kira", id: 1, isOnline: true, isActive: true, icon:"./usersIcons/user1.png", lastMessageDate:1650964337132,
            messages: [{text: "Hi!", date:"1650964337112", isMine: false},
                {text: "Hi, Kira!", date:"1650964337122", isMine: true},
                {text: "How are you?!", date:"1650964337132", isMine: false}]
        },
        {user: "Simon", id: 2, isOnline: true, isActive: false, icon:"./usersIcons/user2.png", lastMessageDate:1650964337132,
            messages: [{text: "Hi!", date:"1650964337112", isMine: false},
                {text: "Hi, Simon!", date:"1650964337122", isMine: true},
                {text: "How are you?!", date:"1650964337132", isMine: false}]
        },
        {user: "Nick", id: 3, isOnline: false, isActive: false, icon:"./usersIcons/user3.png", lastMessageDate:1650964337112,
            messages: [{text: "Hi!", date:"1650964337112", isMine: false},
                {text: "Hi, Nick!", date:"1650964337112", isMine: true},
                {text: "How are you?!", date:"1650964337112", isMine: false}]
        },
        {user: "Sara", id: 4, isOnline: true, isActive: false, icon:"./usersIcons/user4.png", lastMessageDate:1650964337312,
            messages: [{text: "Hi!", date:"1650964337112", isMine: false},
                {text: "Hi, Sara!", date:"1650964337212", isMine: true},
                {text: "How are you?!", date:"1650964337210", isMine: false}]
        },
        {user: "Kim", id: 5, isOnline: false, isActive: false, icon:"./usersIcons/user5.png", lastMessageDate:1650964337312,
            messages: [{text: "Hi!", date:"1650964337112", isMine: false},
                {text: "Hi, Sara!", date:"1650964337212", isMine: true},
                {text: "How are you?!", date:"1650964337209", isMine: false}]
        },
        {user: "Erik", id: 6, isOnline: false, isActive: false, icon:"./usersIcons/user6.png", lastMessageDate:1650964337312,
            messages: [{text: "Hi!", date:"1650964337112", isMine: false},
                {text: "Hi, Sara!", date:"1650964337212", isMine: true},
                {text: "How are you?!", date:"1650964337211", isMine: false}]
        },
    ]
}


export default function reducerUsers(state = initialState, action) {
    switch (action.type) {
        case SET_CHANGE_ACTIVE_CHAT:
            if(state.activeChat === action.payload){
                return state;
            }

            const newUsersActiveChat = state.users.map(user => {
                return {
                    ...user,
                    isActive: action.payload === user.id
            }})
            return {
                ...state,
               activeChat: action.payload,
               users: newUsersActiveChat,
            }
        case SET_ADD_NEW_MESSAGE:
            const newUsersChat = state.users.map(user => {
                return {
                    ...user,
                    lastMessageDate: user.id === action.payload.id  ? action.payload.newMes.date : user.lastMessageDate,
                    messages: user.id === action.payload.id ? [...user.messages, action.payload.newMes] : user.messages,
                }})
            return {
                ...state,
              users: newUsersChat,
            }
        default:
            return state
    }
}

export const setAddNewMessage = (message) => ({type: SET_ADD_NEW_MESSAGE, payload: message});
export const setChangeActiveChat = (id) => ({type: SET_CHANGE_ACTIVE_CHAT, payload: id});