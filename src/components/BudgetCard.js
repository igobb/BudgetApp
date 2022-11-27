import React from 'react';
import {Card, ProgressBar, Stack, Button} from 'react-bootstrap';
import { currencyFormatter } from "../utils";

export default function BudgetCard({ name, amount, max, gray, light, dark, onAddExpenseClick, onViewExpensesClick, hideButtons }) {

    const classNames = []
    if (amount > max) {
        classNames.push("bg-danger", "bg-opacity-10")
    } else if (amount > (0.75 * max)) {
        classNames.push("bg-warning", "bg-opacity-10")
    } else if (gray) {
        classNames.push("bg-primary")
    } else if (light) {
        classNames.push("bg-light")
    }

    const border = []
    if (dark) {
       border.push("dark")
    } else {
       border.push("primary")
    }


    return (
        <Card border={border.join(" ")} className={classNames.join(" ")}>
            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-4">
                    <div className="me-2">{name}</div>
                    <div className="d-flex align-items-baseline">
                        <span className={biggerFontWhenDanger(amount, max)}>
                                {currencyFormatter.format(amount)}</span>
                        {max && (
                            <span className="text-muted fs-6 ms-2">/ {currencyFormatter.format(max)}
                            </span>
                        )}</div>
                </Card.Title>
                {max && (
                    <ProgressBar
                    variant={getProgressBarVariant(amount, max)}
                    min={0}
                    max={max}
                    now={amount}
                />)}
                {!hideButtons && (
                    <Stack direction="horizontal" gap="2" className="mt-4">
                    <Button variant="secondary" className="ms-auto" onClick={onAddExpenseClick}>
                        Dodaj wydatek
                    </Button>
                    <Button onClick={onViewExpensesClick} variant="outline-secondary">
                        Zobacz swoje wydatki
                    </Button>
                </Stack>
                )}
            </Card.Body>
        </Card>
    )
}

function getProgressBarVariant(amount, max) {
    const ratio = amount / max;
    if (ratio < .5 ) return "success"
    if (ratio < 1 ) return "warning"
    return "danger"
}

function biggerFontWhenDanger(amount, max) {
    const ratio = amount / max;
    if (ratio >= 1) return "fs-2 fw-bold"
    if (ratio < 1) return ""
}
