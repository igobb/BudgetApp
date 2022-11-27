import {Button, Form, Modal} from "react-bootstrap"
import { useRef } from "react"
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "../contexts/BudgetContexts"

export default function AddExpenseModal({ show, handleClose, defaultBudgetId }) {
    const descriptionRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()
    const { addExpense, budgets} = useBudgets()

    function handleSubmit(event) {
        event.preventDefault()
        addExpense( {
            description: descriptionRef.current.value,
            amount: parseFloat(amountRef.current.value),
            budgetId: budgetIdRef.current.value,
        })
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Nowy wydatek:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-2" controlId="description">
                        <Form.Label>Opis wydatku:</Form.Label>
                        <Form.Control ref={descriptionRef} type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="amount">
                        <Form.Label>Suma wydatku:</Form.Label>
                        <Form.Control ref={amountRef} type="number" required min={0} step={0.01} />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="budgetId">
                        <Form.Label>Wybierz portfel, do którego chcesz dopisać wydatek:</Form.Label>
                        <Form.Select
                            defaultValue={defaultBudgetId}
                            ref={budgetIdRef}>
                            <option id={UNCATEGORIZED_BUDGET_ID}>Inne</option>
                            {budgets.map(budget => (
                                <option key={budget.id} value={budget.id}>
                                    {budget.name}
                                </option>

                            ))}
                        </Form.Select>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant="success" type="submit">Dodaj wydatek</Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}