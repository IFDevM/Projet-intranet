
import { configureStore } from '@reduxjs/toolkit'
import AuthentificationSlice from '../features/AuthentificationSlice'

export const store = configureStore({
    reducer: {
        authentication: AuthentificationSlice
    }
})