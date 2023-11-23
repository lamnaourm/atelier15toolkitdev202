import React, { useState } from 'react'
import { addbudget } from '../redux/BudgetSlice'
import { useDispatch } from 'react-redux'

export default function AddBudget() {
    const [montant, setMontant] = useState()
    const dispatch = useDispatch()

  return (
    <div className='add1'>
        <input type="number"º name="montant" id="montant" value={montant} onChange={(e) => setMontant(e.target.value)} placeholder='Saisir un montant' />
        <button onClick={() => dispatch(addbudget(montant))}>Ajouter budget</button>
    </div>
  )
}
