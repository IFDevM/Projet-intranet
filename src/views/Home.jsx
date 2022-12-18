import { useState, useEffect } from "react"
import CollabCard from "../components/Collab/CollabCard"
import { getrandomCollab } from "../services/requetes"
import './home.css'

const Home = () => {

    const [aleatoireCollab, setAleatoireCollab] = useState({})

      // on récupere un collab au hasard
    useEffect(() => {
  
        const execAsync = async () => {
            try {
                const {data} = await getrandomCollab();
                setAleatoireCollab(data)
            } catch (error) {
                console.error(error)
            }
        }
        execAsync()
    }, [])

   // on récupere un collab au hasard
    const onHandleClick = () => {
        
        const execAsync = async () => {
            try {
                const {data} = await getrandomCollab();
                setAleatoireCollab(data)
            } catch (error) {
                console.error(error)
            }
        }
        execAsync()
    }

    return (
        <div className="container">
             <h1 className="titlea text-center">Bienvenue sur l'intranet</h1>
                <p className="titleb text-center mb-3">La plate-forme de l'entreprise qui vous permet de retrouver tous vos collaborateurs</p>
                <p className="titlec text-center">Avez-vous dit bonjour à :</p>
            {aleatoireCollab && <CollabCard collab={aleatoireCollab} fromHome={true}/>}
            <div className="btn-direbonjour">
                <button onClick={onHandleClick}>DIRE BONJOUR À QUELQU'UN D'AUTRE</button>
            </div>
        </div>
    )
}

export default Home
