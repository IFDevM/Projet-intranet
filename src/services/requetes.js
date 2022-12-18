import axios from "axios"
import AXIOS from "./configurationAxios"

export const userLogin = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:7000/api/login", {email, password})
        console.log(response)
        return response
    } catch (error) {
        console.error(error)
    }
}

export const getrandomCollab = async () => {
    try {
        const response = await AXIOS.get("collaborateurs/random")
        return response
    } catch (error) {
        console.error(error)
    }
}

export const getAllCollaborates = async () => {
    try {
        const response = await AXIOS.get("collaborateurs/")
        return response
    } catch (error) {
        console.error(error)
    }
}

export const getOneCollab = async (id) => {
    try {
        const response = await AXIOS.get(`collaborateurs/${id}`)
        return response
    } catch (error) {
        console.error(error)
    }
}

export const addOneCollab = async (values) => {
    try {
        console.log(values)
        const response = await AXIOS.post("collaborateurs/", values)
        return response
    } catch (error) {
        console.error(error)
    }
}

export const updateOneCollab = async (id, values) => {
    try {
        const response = await AXIOS.put(`collaborateurs/${id}`, values)
        return response
    } catch (error) {
        console.error(error)
    }
}


export const deleteOneCollab = async (id) => {
    try {
        const response = await AXIOS.delete(`collaborateurs/${id}`)
        return response
    } catch (error) {
        console.error(error)
    }
}
