import React, { useState } from 'react'

export default function AddBudget() {
    const [montant, setMontant] = useState()
  return (
    <div className='add1'>
        <input type="number" name="montant" id="montant" value={montant} onChange={(e) => setMontant(e.target.value)} placeholder='Saisir un montant' />
        <button>Ajouter budget</button>
    </div>
  )
}
