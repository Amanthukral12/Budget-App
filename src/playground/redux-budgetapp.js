import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'dsdvsdvsdv',
        description: 'hello',
        note: 'hello hi bye',
        amount: 100,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};