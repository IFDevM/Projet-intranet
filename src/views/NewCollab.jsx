import { useNavigate } from "react-router-dom"
import CollabForm from "../components/Collab/CollabForm"

import { addOneCollab } from "../services/requetes"

const NewCollab = () => {

    const navigate = useNavigate()
    const sendRequest = (values) => {
        console.log(values)
        try {
            const execAsync = async () => {
                const response = await addOneCollab(values)
                if(response.status === 201){
                  
                    navigate("/collab")
                }
                console.log("response : ", response)
            }
            execAsync()
        } catch (error) {
            console.error(error);
        }
    }
    
    return(
        <div className="container">
            <div className="row py-5">
                <h1 className="text-center">Ajouter un collaborateur</h1>
                <CollabForm sendRequest={sendRequest} adding={true}/>
            </div>
        </div>
    )
}

export default NewCollab