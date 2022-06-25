import {ButtonTopRegLog} from "../../interface/form/formInterface";
import {Link} from "react-router-dom";

function LogButtonTop(props: ButtonTopRegLog){
    return(
        <div className="flex-col lg:flex-row w-[100%] justify-center items-center lg:w-[640px] h-[80px] lg:h-[40px] mt-[1em] rounded-xl">
            <Link to="/login"><button className={`w-[320px] h-[40px] rounded-xl ${props.isConnexion ? 'bg-[#db4b2a]' : 'bg-[#444447]'}`}>CONNEXION</button></Link>
            <Link to="/register"><button className={`w-[320px] h-[40px] rounded-xl ${props.isRegister ? 'bg-[#db4b2a]' : 'bg-[#444447]'}`}>S'ENREGISTRER</button></Link>
        </div>
    )
}

export default LogButtonTop;