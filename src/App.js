import { Stack, Button, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import BudgetCard from "./components/BudgetCard";
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";
import AddExpenseModal from "./components/AddExpenseModal";
import ViewExpensesModal from "./components/ViewExpensesModal";
import { useState } from "react"
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./contexts/BudgetContexts";
import { useBills } from "./contexts/BillsContexts";
import TotalBudgetCard from "./components/TotalBudgetCard";
import HelloCard from "./components/HelloCard";
import BillsCard from "./components/BillsCard";
import AddBillsModal from "./components/AddBillsModal";
import ViewBillsModal from "./components/ViewBillsModal";

function App() {
    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
    const [showAddBillsModal, setShowAddBillsModal] = useState(false)
    const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
    const [showBillsModal, setShowBillsModal] = useState(false)
    const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
    const { budgets, getBudgetExpenses } = useBudgets()
    const { bills } = useBills()

    function openAddExpenseModal(budgetId) {
        setShowAddExpenseModal(true)
        setAddExpenseModalBudgetId(budgetId)
    }

    function openAddBillsModal() {
        setShowAddBillsModal(true)
    }

    function openBillsModal() {
        setShowBillsModal(true)
    }

    function isBudget() {
        if (budgets.length === 0) return false
        if (budgets.length !== 0) return true
    }

  return (
      <>
        <Container>
          <Stack direction="horizontal" gap="2" className="mb-4">
            <h1 className="me-auto">PortfelIO</h1>
            <Button variant="outline-primary" onClick={() => setShowAddBudgetModal(true)}>Dodaj budżet</Button>
              <Button variant="outline-primary" onClick={() => setShowAddBillsModal(true)}>Dodaj swoje rachunki</Button>
            <Button variant="outline-secondary" onClick={openAddExpenseModal}>Dodaj osobne wydatki</Button>
          </Stack>
            <Container>
                <Row className="mb-4 justify-content-md-center">
                    <Col lg={5} md={12} className="mb-3" >{isBudget() ? <TotalBudgetCard/> : <HelloCard/>}</Col>
                    <Col lg={5} md={12} className="mb-3"><BillsCard
                                    onAddBillsClick={() => openAddBillsModal(bills.id)}
                                    onViewBillsClick={() => openBillsModal(bills.id)}
                                />
                    </Col>
                </Row>
            </Container>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
          >

              {budgets.map(budget => {
                  const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
                return (
                  <BudgetCard
                      key={budget.id}
                      max={budget.max}
                      name={budget.name}
                      amount={amount}
                      onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                      onViewExpensesClick={() => setViewExpensesModalBudgetId(budget.id)}
                  />
                )
              })}
              <UncategorizedBudgetCard
                  onAddExpenseClick={openAddExpenseModal}
                  onViewExpensesClick={() => setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)}
              />

          </div>
        </Container>
            <AddBudgetModal
                show={showAddBudgetModal}
                handleClose={() => setShowAddBudgetModal(false)}
            />
            <AddExpenseModal
                show={showAddExpenseModal}
                defaultBudgetId={addExpenseModalBudgetId}
                handleClose={() => setShowAddExpenseModal(false)}
            />
          <ViewExpensesModal
              budgetId={viewExpensesModalBudgetId}
              handleClose={() => setViewExpensesModalBudgetId()}
          />
          <AddBillsModal
              show={showAddBillsModal}
              handleClose={() => setShowAddBillsModal(false)}
          />
          <ViewBillsModal
             show={showBillsModal}
              handleClose={() => setShowBillsModal()}
          />
      </>
  )
}

export default App;
