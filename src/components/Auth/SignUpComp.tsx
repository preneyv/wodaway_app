import {Link} from "react-router-dom";
import {useLanguageStore} from "../../utils/context/LanguageContext.tsx";
import locals from "../../locals";



function SignUpComp(){
    const {language} = useLanguageStore()


    return (
        <div className="choose_form">
            <img alt="wodaway_logo" className="wodaway_logo" src="/src/assets/logo.png"/>
            <div className="auth_form_hr"></div>
            <span className="title">{locals[language]["type_account_to_create.title"]}</span>
            <div className="choose_form_main">
                <Link to="/auth/sign-up/athlete">
                    <div className="item">
                        <img alt="wodaway_athlete" className="wodaway_athlete" src="/src/assets/athlete.png"/>
                        <span>{locals[language]["type_account_to_create.athlete"]}</span>
                    </div>
                </Link>
                <Link to="/auth/sign-up/box">
                    <div className="item">
                        <img alt="wodaway_box" className="wodaway_box" src="/src/assets/box.png"/>
                        <span>{locals[language]["type_account_to_create.box"]}</span>
                    </div>
                </Link>
            </div>
            <div className="choose_form_bottom">
                <Link to="/auth/sign-in">{locals[language]["auth.form.sign.already_account"]}</Link>
            </div>
        </div>
    )
}

export default SignUpComp