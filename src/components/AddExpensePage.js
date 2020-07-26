import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses'
const StartAddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(startAddExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(StartAddExpensePage);