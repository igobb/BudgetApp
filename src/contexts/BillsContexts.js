import React, { useContext, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import useLocalStorage from "../hooks/useLocalStorage"

const BillsContexts = React.createContext()

export function useBills() {
    return useContext(BillsContexts);
}

export const BillsProvider = ({ children }) => {
    const [bills, setBills] = useLocalStorage("bills", [])


    function getBills(billId) {
        return bills.filter(bill => bill.id === billId)
    }

    function addBill({ description, billAmount, dateToPay, billId  }) {
        setBills(prevBills => {
            return [...prevBills, { id: uuidV4(), description, billAmount, dateToPay, billId }]
        })
    }

    // function addBudget({ name, max }) {
    //     setBudgets(prevBudgets => {
    //         if (prevBudgets.find(budget => budget.name === name)) {
    //             return prevBudgets
    //         }
    //         return [...prevBudgets, { id: uuidV4(), name, max }]
    //     })
    // }


    function deleteBill({ id }) {
        setBills(prevBills => {
            return prevBills.filter(bill => bill.id !== id)
        })
    }


    return (
        <BillsContexts.Provider value={{
            bills,
            addBill,
            deleteBill,
            getBills,
        }}>{children}</BillsContexts.Provider>
    )
}