import React, {useState} from 'react';
import {Button, Card} from 'react-bootstrap';
import AddBudgetModal from "./AddBudgetModal";

export default function HelloCard() {
    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)

    return (
        <>
        <Card border="dark" bg="light">
            <Card.Body>
                <Card.Title className="fw-normal mb-4">
                    <div className="me-2">Nie dodałeś jeszcze żadnego budżetu.</div>
                    <div className="d-flex align-items-baseline me-2 fw-lighter fs-6">Dodaj go za pomocą formularza!</div>
                </Card.Title>
                <div className="d-flex justify-content-end">
                    <Button variant="secondary" onClick={() => setShowAddBudgetModal(true)}>Dodaj budżet</Button>
                </div>
            </Card.Body>
        </Card>
        <AddBudgetModal
            show={showAddBudgetModal}
            handleClose={() => setShowAddBudgetModal(false)}
        />
        </>
    )
}
