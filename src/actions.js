export function AddTodo(text, column) {
    return {
        type: 'ADD_TODO',
        text,
        column
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