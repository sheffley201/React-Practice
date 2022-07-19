import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState("2021");

    const filterChangeHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear() === parseInt(selectedYear);
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={selectedYear}
                onFilterChange={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
