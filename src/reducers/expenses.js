// Expenses Reducer
const expensersReducerDefaultState = [];

const expensesReducer = (state = expensersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            // if the item returns true it will be kept in the array otherwise it will be removed
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            // using ... a second time changes the values that was passed down
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
}

export default expensesReducer