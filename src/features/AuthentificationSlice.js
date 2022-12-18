import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userLogin } from '../services/requetes'
import { setLogUser } from '../services/storages';

// First, create the thunk
export const userAuthenticate = createAsyncThunk(
    'user/login',
    async ({email, password}, thunkAPI) => {
        try {
            console.log(email, password);
            const response = await userLogin(email, password)
            // stocker dans localstorage
            setLogUser(response.data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("une erreur est survenue pendant votre connexion")
        }
    }
)

const initialState = {
    authObj: localStorage.getItem("userToken")? JSON.parse(localStorage.getItem("userToken")) : null,
    loading: 'idle',
}

// Then, handle actions in your reducers:
const authenticationSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        builder.addCase(userAuthenticate.rejected, () => {
            //console.log("Connexion rejetée")
            warningMessage("Connexion refusée, Vérifiez vos identifiants")
        })
        builder.addCase(userAuthenticate.pending, () => {
            console.log("Connexion en cours, patientez")
        })
        builder.addCase(userAuthenticate.fulfilled, (state, {payload}) => {
            return {...state, authObj: payload}
        })
    },
})

export default authenticationSlice.reducer