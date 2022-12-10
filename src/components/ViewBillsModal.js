import {Button, Modal, Stack} from "react-bootstrap";
import { useBills } from "../contexts/BillsContexts";
import { currencyFormatter } from "../utils"

export default function ViewBillsModal({ show, handleClose}) {
    const { bills, deleteBill } = useBills()
    const billsLength = bills.length

    function isAnyBill() {
        console.log(bills.length)
        if (billsLength === 0) {
            return "Brak rachunków"
        } else {
            return "Nazwa rachunku / Kwota należna do zapłaty / Data spłaty"
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Stack gap="2">
                        <div>Twoje rachunki:</div>
                        <div className="fs-6">{isAnyBill()}</div>
                    </Stack>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack direction="vertical" gap="3">
                    {bills.map(bill => (
                        <Stack direction="horizontal" gap="2" key={bill.id}>
                            <div className="me-auto fs-3">{bill.description}</div>
                            <div className="me-auto fs-4">{currencyFormatter.format(bill.billAmount)}</div>
                            <div className="me-auto fs-4 text-danger">{bill.dateToPay}</div>
                            <Button onClick={() => deleteBill(bill)} size="sm" variant="danger">&times;</Button>
                        </Stack>
                    ))}
                </Stack>
            </Modal.Body>
        </Modal>
    )
}