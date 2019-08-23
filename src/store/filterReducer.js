
export const Filter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETE: 'SHOW_COMPLETED',
    SHOW_INCOMPLETE: 'SHOW_INCOMPLETE',
    SHOW_BY_USER: 'SHOW_BY_USER'
}


export default function filter(state = { status: Filter.SHOW_ALL, userId: -1 }, action) {
    switch (action.type) {
        case 'SET_STATUS_FILTER':
            return {
                ...state,
                status: action.status
            }
        case 'SET_USER_FILTER':
            return {
                ...state,
                userId: action.userId
            }
        default:
            return state;
    }
}
