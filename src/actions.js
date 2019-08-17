export function AddTodo(text, columnId, completed = false) {
    return {
        type: 'ADD_TODO',
        text,
        columnId,
        completed
    }
}

export function AddTodoAtIndex(text, columnId, completed = false, index) {
    return {
        type: 'ADD_TODO_AT_INDEX',
        text,
        columnId,
        completed,
        index
    }
}
export function Swap(text, columnId, completed = false, srcIndex, destIndex) {
    return {
        type: 'ADD_TODO_AT_INDEX',
        text,
        columnId,
        completed,
        srcIndex,
        destIndex
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