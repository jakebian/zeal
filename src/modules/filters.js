const updateActionType = 'filters-update'

export function updateFilters (filters) {
    return {
        type: updateActionType,
        filters: filters
    };
}

export function filtersReducer (state=[], action) {
    switch (action.type) {
        case updateActionType:
            return action.filters || state
    }

    return state
}
