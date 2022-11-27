import {Button, Form, Modal} from "react-bootstrap";
import { useRef } from "react";
import { useBills } from "../contexts/BillsContexts";

export default function AddBillsModal({ show, handleClose}) {
    const  descriptionRef = useRef()
    const amountRef = useRef()
    const dateToPayRef = useRef()
    const { addBill } = useBills()
    function handleSubmit(event) {
        event.preventDefault()
        addBill({
            billAmount: parseFloat(amountRef.current.value),
            description: descriptionRef.current.value,
            dateToPay: dateToPayRef.current.value,
        })
        handleClose()
    }

    return (
       <Modal show={show} onHide={handleClose}>
           <Form onSubmit={handleSubmit}>
               <Modal.Header closeButton>
                   <Modal.Title>Dodaj nowy rachunek:</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                   <Form.Group className="mb-2" controlId="name">
                       <Form.Label>Nazwa rachunku:</Form.Label>
                       <Form.Control ref={descriptionRef} type="text" required />
                   </Form.Group>
                   <Form.Group className="mb-2" controlId="max">
                       <Form.Label>Wartość rachunku do spłaty:</Form.Label>
                       <Form.Control ref={amountRef} type="number" required min={0} step={0.01} />
                   </Form.Group>
                   <Form.Group className="mb-2" controlId="max">
                       <Form.Label>Data spłaty rachunku:</Form.Label>
                       <Form.Control ref={dateToPayRef} type="date" required />
                   </Form.Group>
                   <div className="d-flex justify-content-end">
                       <Button variant="success" type="submit">Dodaj rachunek</Button>
                   </div>
               </Modal.Body>
           </Form>
       </Modal>
    )
}