import {ButtonTopRegLog} from "../../interface/form/formInterface";
import {Link} from "react-router-dom";

function LogButtonTop(props: ButtonTopRegLog){
    return(
        <div className="flex justify-between w-[700px] h-[40px] bg-[#444447] mt-[1em] rounded-xl">
            <button className={`w-[340px] h-[40px] rounded-xl ${props.isConnexion ? 'bg-[#db4b2a]' : ''}`}><Link to="/login">CONNEXION</Link></button>
            <button className={`w-[340px] h-[40px] rounded-xl ${props.isRegister ? 'bg-[#db4b2a]' : ''}`}><Link to="/register">S'ENREGISTRER</Link></button>
        </div>
    )
}

export default LogButtonTop;