export function AddUser(username, color) {
    return {
        type: 'ADD_USER',
        username,
        color
    }
}