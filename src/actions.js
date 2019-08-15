export function AddTodo(text, column, completed = false) {
    return {
        type: 'ADD_TODO',
        text,
        column,
        completed
    }
}

export function RemoveTodo(index, column) {
    return {
        type: 'REMOVE_TODO',
        index,
        column
    }
}

export function CompleteTodo(index, column) {
    return {
        type: 'COMPLETE_TODO',
        index,
        column
    }
}

export function AddTodoList(colName) {
    return {
        type: 'ADD_TODO_LIST',
        colName
    }
}