import BudgetCard from "./BudgetCard";
import { useBudgets } from "../contexts/BudgetContexts";

export default function TotalBudgetCard() {
    const { expenses, budgets } = useBudgets()
    const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
    const max = budgets.reduce((total, budget) => total + budget.max, 0)

    if(max === 0) return null

    return (
        <BudgetCard dark light amount={amount}  name="Status Twoich portfeli:" max={max} hideButtons/>
    )
}