import React from 'react';
import {Card, ProgressBar, Stack, Button} from 'react-bootstrap';
import { currencyFormatter } from "../utils";

export default function HelloCard() {

    return (
        <Card border="dark" bg="light">
            <Card.Body>
                <Card.Title className="fw-normal mb-4">
                    <div className="me-2 mb-2">Nie dodałeś jeszcze żadnego budżetu.</div>
                    <div className="d-flex align-items-baseline">Dodaj go za pomocą formularza!</div>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}
