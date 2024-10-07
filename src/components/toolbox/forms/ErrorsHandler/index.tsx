import "./style.scss"


function ErrorHandler({error} : {error : string | undefined}){

    if(!error) return

    return <i className="wodaway_error">{error}</i>
}


export default ErrorHandler