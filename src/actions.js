export function AddTodo(text, columnId, completed = false) {
    return {
        type: 'ADD_TODO',
        text,
        columnId,
        completed
    }
}

export function MoveTodo(columnId, srcIndex, destIndex) {
    return {
        type: 'MOVE_TODO',
        columnId,
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