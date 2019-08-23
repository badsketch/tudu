import { Filter } from './filterReducer';

export function FilterByComplete() {
    return {
        type: 'SET_GENERAL_FILTER',
        filter: Filter.SHOW_COMPLETE
    }
}

export function FilterByIncomplete()  {
    return {
        type: 'SET_GENERAL_FILTER',
        filter: Filter.SHOW_INCOMPLETE
    }
}

export function FilterByUser(id) {
    return {
        type: 'SET_ASSIGNMENT_FILTER',
        filter: Filter.SHOW_BY_USER,
        userId: id
    }
}

export function ResetFilter() {
    return {
        type: 'SET_GENERAL_FILTER',
        filter: Filter.SHOW_ALL
    }
}