export function AddUser(username, color) {
    return {
        action: 'ADD_USER',
        username,
        color
    }
}