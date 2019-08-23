
const userInitialState = {
    1: { username: 'dwang', color: '#19635a' },
    2: { username: 'bsmith', color: '#7BDCB5' },
}

let userId = 3;
export default function user(state = userInitialState, action) {
    switch (action.type) {
        case 'ADD_USER': 
            return {
                ...state,
                [userId++]: { username: action.username, color: action.color }
            }
        default:
            return state
    }
}

