export function AddTodo(text) {
    return {
        type: 'ADD_TODO',
        text
    }
}

export function RemoveTodo(index) {
    return {
        type: 'REMOVE_TODO',
        index
    }
}

export function CompleteTodo(index) {
    return {
        type: 'COMPLETE_TODO',
        index
    }
}