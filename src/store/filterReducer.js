
export const Filter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETE: 'SHOW_COMPLETED',
    SHOW_INCOMPLETE: 'SHOW_INCOMPLETE',
    SHOW_BY_USER: 'SHOW_BY_USER'
}

export default function filter(state = Filter.SHOW_ALL, action) {
    switch (action.type) {
        case 'SET_GENERAL_FILTER':          
            return {
                filterType: action.filter,
                userId: null
            };
        case 'SET_ASSIGNMENT_FILTER':
            return {
                filterType: action.filter,
                userId: action.userId
            }
        default:
            return state;
    }
}                                   