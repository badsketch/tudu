export function AddTodo(text, columnId, completed = false, index = -1) {
    return {
        type: 'ADD_TODO',
        text,
        columnId,
        completed,
        index
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

export function MoveTodoToColumn(srcColumnId, destColumnId, srcIndex, destIndex) {
    return {
        type: 'MOVE_TODO_TO_COLUMN',
        srcColumnId,
        destColumnId,
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