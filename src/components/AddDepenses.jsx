import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addbudget, adddepense } from '../redux/BudgetSlice'
import uuid from 'react-uuid'

export default function AddDepenses() {

    const [titre, setTitre] = useState()
    const [montant, setMontant] = useState()
    const dispatch = useDispatch()

  return (
    <div className='add2'>
        <input type="text" name="titre" id="titre" value={titre} onChange={(e) => setTitre(e.target.value)} placeholder='Saisir un titre'/>
        <input type="number" name="montant" id="montant" value={montant} onChange={(e) => setMontant(e.target.value)} placeholder='Saisir un montant'/>
        <button onClick={() => dispatch(adddepense({id:uuid, titre:titre, montant:montant}))}>Ajouter depense</button>
    </div>
  )
}
