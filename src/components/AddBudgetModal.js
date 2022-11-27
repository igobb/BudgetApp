import {Button, Form, Modal} from "react-bootstrap";
import { useRef } from "react";
import { useBudgets } from "../contexts/BudgetContexts";

export default function AddBudgetModal({ show, handleClose}) {
    const nameRef = useRef()
    const maxRef = useRef()
    const { addBudget } = useBudgets()
    function handleSubmit(event) {
        event.preventDefault()
        addBudget({
            max: parseFloat(maxRef.current.value),
            name: nameRef.current.value,
        })
        handleClose()
    }

    return (
       <Modal show={show} onHide={handleClose}>
           <Form onSubmit={handleSubmit}>
               <Modal.Header closeButton>
                   <Modal.Title>Twój nowy portfel:</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                   <Form.Group className="mb-2" controlId="name">
                       <Form.Label>Nazwa portfela:</Form.Label>
                       <Form.Control ref={nameRef} type="text" required />
                   </Form.Group>
                   <Form.Group className="mb-2" controlId="max">
                       <Form.Label>Określ maksymalny poziom wydatków:</Form.Label>
                       <Form.Control ref={maxRef} type="number" required min={0} step={0.01} />
                   </Form.Group>
                   <div className="d-flex justify-content-end">
                       <Button variant="success" type="submit">Dodaj portfel</Button>
                   </div>
               </Modal.Body>
           </Form>
       </Modal>
    )
}