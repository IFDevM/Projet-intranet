import CollabCard from "../components/Collab/CollabCard"

import { deleteOneCollab, getAllCollaborates } from "../services/requetes"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import "./collabList.css"

const CollabList = () => {

    //pour récupérer un utilisateur qui se connecte
    
    const UserConnected = useSelector(state => state.authentication.authObj)
    const [user, setUser] = useState({})
    const [collaborateTab, setCollaborateTab] = useState([])
    const [filtredCollaborateTab, setFiltredCollaborateTab] = useState([])
    const [filters, setFilters] = useState({
       researchsection: "1",
        category: "all",
        research: ""
    })

    useEffect(() => {
        if (UserConnected) {
            setUser(UserConnected.user)
        }
    }, [])

    useEffect(() => {
        const execAsync = async () => {
            try {
                const { data } = await getAllCollaborates()
                setCollaborateTab(data)
                setFiltredCollaborateTab(data)
            } catch (error) {
                console.error(error)
            }
        }
        execAsync()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        filters[name] = value
        setFilters(filters)
        let temp
        switch (filters.researchsection) {
            case "1":
                temp = collaborateTab.filter(collab => (collab.firstname.includes(filters.research) || collab.lastname.includes(filters.research)))
                break;
            case "2":
                temp = collaborateTab.filter(collab => (collab.city.includes(filters.research) || collab.country.includes(filters.research)))
                break;
            default:
                break;
        }
        if (filters.category !== "all") {
            temp = temp.filter(collab => (collab.service === filters.category))
        }
        setFiltredCollaborateTab(temp)
    }

// pour supprimer un collaborateur
    const deleteCollab = (id) => {
        const execAsync = async () => {
            const response = await deleteOneCollab(id)
            if (response.status === 200) {
                setCollaborateTab(collaborateTab.filter(element => element.id !== id))
                setFiltredCollaborateTab(filtredCollaborateTab.filter(element => element.id !== id))
                console.log("collaborateur supprimé");
            }
        }
     
    }

    return (
        <div className="container">
            <section className="search row py-5">
                <h1 className={`text-center`}>Liste des collaborateurs</h1>
                <form onSubmit={handleSubmit} className="searchform mt-5" >
                    <div className="row">
                        <div className="col-3">
                            <input type="text" id="search" name="search" placeholder="Rechercher ..." onChange={handleChange} />
                        </div>

                        <div className="filteredCtnr col-4">
                            <div className="filter">
                                <label htmlFor="researchsection">Rechercher par</label>
                                <select id="researchsection" name="researchsection" onChange={handleChange}>
                                    <option value="1">Nom</option>
                                    <option value="2">Localisation</option>
                                </select>
                            </div>
                            <div className="filter">
                                <label htmlFor="category">Catégorie</label>
                                <select id="category" name="category" onChange={handleChange}>
                                    <option value="all">Tous</option>
                                    <option value="Client">Client</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Technique">Technique</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <section className="row">
                {
                    filtredCollaborateTab &&
                    <div className="affichage mt-5 pb-5">
                        {filtredCollaborateTab.map((collab, index) => (
                            <CollabCard collab={collab} key={index} user={user} fromHome={false} deleteCollab={deleteCollab} />
                        ))}
                    </div>
                }
            </section>
        </div>
    )
}

export default CollabList
