import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import CollabForm from "../components/Collab/CollabForm"
import { getOneCollab } from "../services/requetes"

const UpdateProfil = () => {

    const connectedUser = useSelector(state => state.authentication.authObj)
    let id
    if(connectedUser){
        id = connectedUser.user.id
    }

    const [collab, setCollab] = useState(null)

     useEffect(() => {
        const execAsync = async () => {
            const {data} = await getOneCollab(id)
            setCollab(data);
        }
        execAsync()
    }, [])

 
    return(
        <div className="container">
            <div className="py-3 row">
                <h1 className="text-center">Mettre à jour mon profil</h1>
                {collab && <CollabForm collab={collab} changeUser={true} />}
            </div>
        </div>
    )
}

export default UpdateProfil