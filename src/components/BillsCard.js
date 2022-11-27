import React from 'react';
import {Card, Stack, Button} from 'react-bootstrap';
import {useBills} from "../contexts/BillsContexts";


export default function BillsCard({ onAddBillsClick, onViewBillsClick }) {

    const { bills } = useBills()
    let howManyBills = bills.length
    let [lastItem] = bills.slice(-1)

    function numberOfBills() {

        if (howManyBills) {
            return `Liczba Twoich rachunków: ${howManyBills}`
        } else {
            return "Nie dodałeś żadnych rachunków"
        }
    }
    function infoAboutLastBill() {
        if (howManyBills) {
            return `Ostatnio dodany rachunek to ${lastItem.description.toUpperCase()}, a termin upływa ${lastItem.dateToPay}`
        } else {
            return "Dodaje je za pomocą formularza dodawania!"
        }
    }

    const billsAmount = bills.reduce((total, bill) => total + bill.billAmount, 0)

    function sumOfBills() {
        if (howManyBills) {
            return `Suma Twoich należności w rachunkach wynosi ${billsAmount} zł`
        } else {
            return null
        }
    }

    return (
        <Card border="dark" bg="light">
            <Card.Body>
                <Card.Title className="align-items-baseline fw-normal mb-4">
                   <div className="me-2 fs-5">{numberOfBills()}</div>
                    <div className="fs-6">{sumOfBills()}</div>
                    <div className="me-2 fw-lighter fs-6">{infoAboutLastBill()}</div>
                </Card.Title>
                    <Stack direction="horizontal" gap="2" className="mt-4">
                        <Button variant="secondary" className="ms-auto" onClick={onAddBillsClick}>
                            Dodaj rachunek
                        </Button>
                        <Button onClick={onViewBillsClick} variant="outline-secondary">
                            Zobacz swoje rachunki
                        </Button>
                    </Stack>
            </Card.Body>
        </Card>
    )
}
