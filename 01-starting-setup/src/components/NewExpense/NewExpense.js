import { useState } from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [formOpened, setFormOpened] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setFormOpened(false);
    };

    const openHandler = () => {
        setFormOpened(true);
    };

    const closeHandler = () => {
        setFormOpened(false);
    };

    return (
        <div className="new-expense">
            {!formOpened && (
                <button onClick={openHandler}>Add New Expense</button>
            )}
            {formOpened && (
                <ExpenseForm
                    onCancel={closeHandler}
                    onSaveExpenseData={saveExpenseDataHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
