import { Filter } from './filterReducer';

export function FilterByComplete() {
    return {
        type: 'SET_STATUS_FILTER',
        status: Filter.SHOW_COMPLETE
    }
}

export function FilterByIncomplete()  {
    return {
        type: 'SET_STATUS_FILTER',
        status: Filter.SHOW_INCOMPLETE
    }
}

export function FilterByUser(id) {
    return {
        type: 'SET_USER_FILTER',
        userId: id
    }
}

export function ResetFilter() {
    return {
        type: 'SET_STATUS_FILTER',
        status: Filter.SHOW_ALL
    }
}