import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import CollabForm from "../components/Collab/CollabForm"
import { getOneCollab, updateOneCollab } from "../services/requetes"

const UpdateCollab = () => {
    
    const {id} = useParams()
    const [collab, setCollab] = useState(null)

     useEffect(() => {
        const execAsync = async () => {
            const {data} = await getOneCollab(id)
            setCollab(data);
        }
        execAsync()
    }, [])
    
    const sendRequest = (values) => {
        //console.log(values)
        try {
            const execAsync = async () => {
                const response = await updateOneCollab(id, values)
                console.log("response : ", response)
            }
            execAsync()
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="container">
            <h1>Mettre à jour un collaborateur</h1>
            {collab && <CollabForm collab={collab} modif={true} sendRequest={sendRequest}/>}
        </div>     
    )
}

export default UpdateCollab
