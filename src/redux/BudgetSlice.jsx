import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";


const BudgetSlice = createSlice({
    name:'budget',
    initialState:{
        budget:200,
        depenses:[
            {
                id:uuid(),
                titre:'Voiture',
                montant:3000
            },
            {
                id:uuid(),
                titre:'Achat PC',
                montant:10000
            },
            {
                id:uuid(),
                titre:'Vetement',
                montant:2000
            },
        ]
    },
    reducers: {
        addbudget: (state, action) => {
            state.budget += parseFloat(action.payload)
        },
        adddepense: (state, action) => {
            state.depenses = [...state.depenses, action.payload]
        }
    }
})

export const {addbudget, adddepense} = BudgetSlice.actions
export default BudgetSlice.reducer
