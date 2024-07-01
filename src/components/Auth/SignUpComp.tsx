import {Link} from "react-router-dom";
import {useState} from "react";
import SignUpAthleteForm from "./SignUpAthleteForm.tsx";
import SignUpBoxForm from "./SignUpBoxForm.tsx";



function SignUpComp(){

    const [typeForm, setTypeForm] = useState<string |null>(null)

    const handleTypeForm = (type :string) => {
        setTypeForm(type)
    }

    if(typeForm && typeForm === "athlete")
        return <SignUpAthleteForm />

    if(typeForm && typeForm === "box")
        return <SignUpBoxForm />

    return (
        <div className="choose_form">
            <img alt="wodaway_logo" className="wodaway_logo" src="/src/assets/logo.png"/>
            <div className="auth_form_hr"></div>
            <span className="title">Choisissez le type de compte à créer</span>
            <div className="choose_form_main">
                <div className="item">
                    <div role="button" onClick={() => handleTypeForm("athlete")}><img alt="wodaway_athlete" className="wodaway_athlete" src="/src/assets/athlete.png"/></div>
                    <span>Athlete</span>
                </div>
                <div className="item">
                    <div role="button" onClick={() => handleTypeForm("box")}><img alt="wodaway_box" className="wodaway_box" src="/src/assets/box.png"/></div>
                    <span>Box</span>
                </div>
            </div>
            <div className="choose_form_bottom">
                <Link to="/auth/sign-in">Vous avez déjà un compte ? Se connecter</Link>
            </div>
        </div>
    )
}

export default SignUpComp