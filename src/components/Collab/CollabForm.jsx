import "./collabForm.css"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const CollabForm = ({ collabs, change, changeUser, addUser }) => {

    const initials = {
        gender: "male", service: "Client", lastname: "", firstname: "", email: "", password: "", birthdate: "", phone: "", city: "", country: "", photo: ""
    }

    return (
        <Formik
            initialValues={collabs ? collabs : initials}
            validationSchema={Yup.object({
                lastname: Yup.string()
                    .required(<p className="errorMessage"> saisir votre nom</p>),
                firstname: Yup.string()
                    .required(<p className="errorMessage"> saisir votre prénom</p>),
                email: Yup.string()
                    .email(<p className="errorMessage"> saisir une adresse email valide</p>)
                    .required(<p className="errorMessage"> saisir une adresse email</p>),
                password: Yup.string()
                    .min(6, <p className="errorMessage">Le mot de passe doit contenir au moins 6 caratères</p>),
                passwordBis: Yup.string()
                    .min(6, <p className="errorMessage">Le mot de passe doit contenir au moins 6 caratères</p>)
                    .oneOf([Yup.ref("password"), null], <p className="errorMessage">Vos mots de passe doivent similaires</p>),
                birthdate: Yup.date()
                    .required(<p className="errorMessage">sélectionner votre date de naissance</p>),
                phone: Yup.string()
                    .required(<p className="errorMessage"> saisir votre numéro de téléphone</p>)
                    .matches(/[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}/, "Le format du numéro de téléphone est xx-xx-xx-xx-xx"),
                city: Yup.string()
                    .required(<p className="errorMessage"> saisir un nom de ville</p>),
                country: Yup.string()
                    .required(<p className="errorMessage"> saisir un nom de pays</p>),
                photo: Yup.string()
                   
            })}
           
        >
            <Form className="formcollab mt-5">
                <div className="row mb-3">
                    <div className="col-6">
                        <div className="fieldCtnr">
                            <label htmlFor="gender">Civilité <span>*</span></label>
                            <Field name="gender" as="select">
                                <option value="male">Homme</option>
                                <option value="female">Femme</option>
                            </Field>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="fieldCtnr">
                            <label htmlFor="service">Catégorie <span>*</span></label>
                            <Field name="service" as="select">
                                <option value="Client">Client</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Technique">Technique</option>
                            </Field>
                        </div> 
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-6">
                        <div className="fieldCtnr">
                            <label htmlFor="lastname">Nom <span>*</span></label>
                            <Field type="text" name="lastname" />
                        </div>
                        <ErrorMessage name="lastname" />
                    </div>
                    <div className="col-6">
                        <div className="fieldCtnr">
                            <label htmlFor="firstname">Prénom <span>*</span></label>
                            <Field type="text" name="firstname" />
                        </div>
                        <ErrorMessage name="firstname" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-6">
                        <div className="fieldCtnr">
                            <label htmlFor="email">Email <span>*</span></label>
                            <Field type="email" name="email" />
                        </div>
                        <ErrorMessage name="email" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-6">
                        <div className="fieldCtnr">
                            <label htmlFor="password">Mot de passe {addUser? <span>*</span> : <></>}</label>
                            <Field type="password" name="password" required={addUser? true : false}/>
                        </div>
                        <ErrorMessage name="password" />
                    </div>
                </div>
                {changeUser &&
                    <div className="row mb-3">
                        <div className="col-6">
                            <div className="fieldContainer">
                                <label htmlFor="passwordBis">Confirmation</label>
                                <Field type="password" name="passwordBis" />
                                <ErrorMessage name="passwordBis" />
                            </div>
                        </div>
                    </div>
                }
                <div className="row mb-3">
                    <div className="col-6">
                        <div className="fieldContainer">
                            <label htmlFor="birthdate">Date de naissance <span>*</span></label>
                            <Field type="date" name="birthdate" />
                        </div>
                        <ErrorMessage name="birthdate" />
                    </div>
                    <div className="col-6">
                        <div className="fieldContainer">
                            <label htmlFor="phone">Téléphone <span>*</span></label>
                            <Field type="tel" name="phone" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" />
                        </div>
                        <ErrorMessage name="phone" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-6">
                        <div className="fieldContainer">
                            <label htmlFor="city">Ville <span>*</span></label>
                            <Field type="text" name="city" />
                        </div>
                        <ErrorMessage name="city" />
                    </div>
                    <div className="col-6">
                        <div className="fieldContainer">
                            <label htmlFor="country">Pays <span>*</span></label>
                            <Field type="text" name="country" />
                        </div>
                        <ErrorMessage name="country" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-6">
                        <div className="fieldContainer">
                            <label htmlFor="photo">Photo (URL)</label>
                            <Field type="url" name="photo" />
                        </div>
                        <ErrorMessage name="photo" />
                    </div>
                </div>
                {change &&
                    <div className="mb-3">
                        <Field type="checkbox" name="isAdmin" id="isAdmin"/>
                        <label htmlFor="isAdmin">&nbsp;&nbsp;&nbsp;Définir comme administrateur</label>
                    </div>
                }
                <div className="text-center mb-3">
                    <button type="submit" className="btnSend">Envoyer</button>
                </div>
            </Form>
        </Formik>
    )
}

export default CollabForm