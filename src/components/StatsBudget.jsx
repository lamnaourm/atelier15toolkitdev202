import React from 'react'
import { useSelector } from 'react-redux'

export default function StatsBudget() {
    const budget = useSelector(state => state.budget.budget)
    const depenses = useSelector(state => state.budget.depenses)
    const total = depenses.reduce((som, d) => som + parseFloat(d.montant), 0)
    return (
        <div className='stats'>
            <div>
                BUDGET : {budget}
            </div>
            <div>
                DEPENSES : {total}
            </div>
            <div>
                ECART : {budget - total}
            </div>
        </div>
    )
}
