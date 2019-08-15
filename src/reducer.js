let todoId = 2;

const initialState = {
    columns: 
        {
            unassigned: {
                    1: { desc: 'get this to work', completed: true}
                }
        },
    users: []
};


export const reducer = (state = initialState, action) => {
    console.log('prev: ', state);
    switch (action.type) {
        case 'ADD_TODO': 
            return {
                ...state,
                columns: {
                    ...state.columns,
                    [action.column]: {
                        ...state.columns[action.column],
                        [todoId++]: { desc: action.text, completed: false }
                    }
                }
            } 
        case 'REMOVE_TODO':
            const { [action.index]: value, ...theRest } = state.columns[action.column];
            return {
                ...state,
                columns: {
                    ...state.columns,
                    [action.column]: theRest
                }
            }
        case 'COMPLETE_TODO':
            return {
                ...state,
                columns: {
                    ...state.columns,
                    [action.column] : {
                        ...state.columns[action.column],
                        [action.index]: {
                            ...state.columns[action.column][action.index],
                            completed: !state.columns[action.column][action.index].completed
                        }
                    }
                }
            }
        case 'ADD_TODO_LIST':
            return {
                ...state,
                columns: {
                    ...state.columns,
                    [action.colName] : []
                }
            }
        default: 
            return state;
    };
}
