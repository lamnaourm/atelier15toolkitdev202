import React, { useState } from 'react'

export default function AddDepenses() {

    const [titre, setTitre] = useState()
    const [montant, setMontant] = useState()

  return (
    <div className='add2'>
        <input type="text" name="titre" id="titre" value={titre} onChange={(e) => setTitre(e.target.value)} placeholder='Saisir un titre'/>
        <input type="number" name="montant" id="montant" value={montant} onChange={(e) => setTitre(e.target.value)} placeholder='Saisir un montant'/>
        <button>Ajouter depense</button>
    </div>
  )
}
