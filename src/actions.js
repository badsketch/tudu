export function AddTodo(text, columnId, completed = false) {
    return {
        type: 'ADD_TODO',
        text,
        columnId,
        completed
    }
}

export function RemoveTodo(index, columnId) {
    return {
        type: 'REMOVE_TODO',
        index,
        columnId
    }
}

export function ToggleTodo(index, columnId) {
    return {
        type: 'TOGGLE_TODO',
        index,
        columnId
    }
}

export function AddTodoList(colName) {
    return {
        type: 'ADD_TODO_LIST',
        colName
    }
}