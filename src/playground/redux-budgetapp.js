import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});




const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addExpense({ description: 'Rent', amount: 100 }));

//console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'dsdvsdvsdv',
        description: 'hello',
        note: 'hello hi bye',
        amount: 100,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};