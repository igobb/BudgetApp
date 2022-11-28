import BudgetCard from "./BudgetCard";
import { useBudgets } from "../contexts/BudgetContexts";

export default function TotalBudgetCard() {
    const { expenses, budgets } = useBudgets()
    const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
    const max = budgets.reduce((total, budget) => total + budget.max, 0)
    // const budgetsLength = budgets.length
    // console.log(budgetsLength)
    if(max === 0) return null

    // function showTotalBudget() {
    //     if(budgetsLength > 0) {
    //         return <BudgetCard dark light amount={amount}  name="Status Twoich portfeli:" max={max} hideButtons/>
    //     } else {
    //         return <div>Nie dodałeś żadnego portfela. Dodaj je za pomocą formularza.</div>
    //     }
    // }


    return (
        // <div>{showTotalBudget()}</div>
        <BudgetCard dark light amount={amount}  name="Status Twoich portfeli:" max={max} hideButtons/>
    )
}