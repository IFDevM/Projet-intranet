import { Link } from "react-router-dom"
import { GrMail} from 'react-icons/gr';
import  "./collabCard.css"
import { BsFillTelephoneForwardFill} from 'react-icons/bs';
import { FaBirthdayCake} from 'react-icons/fa';

const CollabCard = ({ collab, user, fromHome, deleteCollab }) => {

    return (
        <figure className="card-group">
            <div className="img-ctnr">
                <img src={collab.photo? collab.photo : "https://via.placeholder.com/100"} alt={`Photo de ${collab.firstname} ${collab.lastname}`} />
            </div>
            <figcaption>
                <div className="figcaption">
                    <p className="service collab.service">{collab.service}</p>
                    <p className="name"><span>{`${collab.firstname} ${collab.lastname}`}</span> <span>{` (${new Date().getUTCFullYear() - new Date(collab.birthdate).getFullYear()} ans)`}</span></p>
                    <p className="address">{`${collab.city}, ${collab.country}`}</p>
                    <p className="email mt-3"><span><GrMail /></span> <span className="text-decoration-underline">{collab.email}</span></p>
                    <p className="phone"><span><BsFillTelephoneForwardFill/></span> <span className="text-decoration-underline">{collab.phone}</span></p>
                    <p className="birth"><span><FaBirthdayCake /></span> {new Date(collab.birthdate).toLocaleDateString("fr-FR", { month: 'long', day: 'numeric' })}</p>
                </div>
                {(!fromHome && user.isAdmin) &&
                    <div className="btnContainer mt-3">
                        <Link to={`/updated-collab/${collab.id}`}>Editer</Link>
                        <button className="button" onClick={() => deleteCollab(collab.id)}>Supprimer</button>
                    </div>
                }
            </figcaption>
        </figure>
    )
}

export default CollabCard
