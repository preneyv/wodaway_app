
type localsType = {
    [key:string] : {
        [key: string] :string
    }
}

const locals : localsType  = {
    en:{},
    fr:{
        // global
        "or" : "ou",
        // form_global
        "auth.form.email" : "Email",
        "auth.form.password" : "Mot de passe",
        "auth.form.submit" : "Valider",
        "auth.form.confirm" : "Confirmer",
        //form_auth_global
        "auth.form.sign.no_account" : "Vous n'avez pas de compte ? Créez en un !",
        "auth.form.sign.already_account" : "Vous avez déjà un compte ? Se connecter",
        //form_auth_sign_in
        "auth.form.sign_in.title": "Se connecter",
        //page_choose_type_account_to_create
        "type_account_to_create.title": "Choisissez le type de compte à créer",
        "type_account_to_create.athlete": "Athlete",
        "type_account_to_create.box": "Box",
        //form_auth_sign_up_athlete
        "auth.form.sign_up.athlete.title" : "Créer un compte athlete",
        "auth.form.sign_up.athlete.firstname" : "Prénom",
        "auth.form.sign_up.athlete.lastname" : "Nom",
        "auth.form.sign_up.athlete.age" : "Age",
        "auth.form.sign_up.athlete.weight" : "Poids (en kg)",
        "auth.form.sign_up.athlete.height" : "Taille (en cm)",
        "auth.form.sign_up.confirm_password" : "Confirmer le mot de passe",
        //form_auth_sign_up_box
        "auth.form.sign_up.box.title" : "Créer un compte box",
        "auth.form.sign_up.box.name" : "Nom de la Box",
        "auth.form.sign_up.box.company" : "Nom de l'entreprise",
        "auth.form.sign_up.box.address" : "Adresse Postale",
        "auth.form.sign_up.box.postal_code" : "Code Postal",
        "auth.form.sign_up.box.city" : "Ville",
        "auth.form.sign_up.box.created_at" : "Date de création",
        "auth.form.sign_up.choose_box" : "Créer un compte Box.",
        "auth.form.sign_up.choose_athlete" : "Créer un compte Athlete.",

        //form_auth_validation_account
        "auth.form.validation_account.title" : "Valider mon compte",
        "auth.form.validation_account.need_confirmation" : "Veuillez confirmer votre inscription avec cette adresse :",

        //form_rules
        "form.rule.required.field": 'Champ requis !',
        "form.rule.min_ten_char" : "Taille minimum de 10 caractères !",
        "form.rule.min_zero" : "Doit être supérieur à 0",
        "form.rule.no_matching_password": "Les mots de passe ne correspondent pas !",
        "form.rule.SIREN" : "Le SIREN doit contenir exactement 9 chiffres",
        "form.rule.SIRET" : "Le SIRET doit contenir exactement 14 chiffres",
        "form.rule.SIREN_not_exist" : "Ce SIREN n'existe pas",
        "form.rule.SIRET_not_exist" : "Ce SIRET n'existe pas",
        "form.rule.created_date.sup_now" : "La date de création renseignée est supérieure ou égale à la date actuelle.",

        //retours api
        "error_happened" : "Une erreur est survenue",
        "check_form" : "Assurez-vous d'avoir correctement rempli le formulaire",
        "account.already_exist" : "Un compte avec cet email existe déjà !",
        "account.not_exist.not_valid": "Ce compte n'existe pas ou n'a pas été validé !",
        "ids.no_matching" : "Les identifiants ne correspondent pas !",
        "sorry" : "Veuillez nous excuser pour le dérangement !",
        "email.confirm" : "Veuillez confirmer votre inscription avec le mail reçu !",
        "account.valid" : "Compte validé !",
        "account.can_connect" : "Vous pouvez maintenant vous connecter !"

    }
}

export default locals