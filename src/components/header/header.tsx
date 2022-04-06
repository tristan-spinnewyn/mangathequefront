import {ArrayMenuLi} from "../../interface/header/headerInterface";
import {AuthContext} from "../../App";
import {useContext} from "react";
import {getRoles} from "../../services/authService";
import MenuGroup from "./menuGroup";

function Header(){
    const menuTop: ArrayMenuLi = {lstMenuLi: []}
    const menuBot: ArrayMenuLi = {lstMenuLi: []}
    const context = useContext(AuthContext)

    menuTop.lstMenuLi.push({url:'/', name:'Nouveautés'},{url:'/planning',name:'Planning'},{url:'/search',name:'Recherche'})

    if(context.isConnected){
        menuBot.lstMenuLi.push({url:'/account',name:'Mon compte'})
        menuBot.lstMenuLi.push({url:'/logout',name:'Se déconnecter'})
        menuBot.lstMenuLi.push({url:'/collection', name: 'Ma collection'})
        const roles = getRoles();
        if(roles.includes('ROLE_ADMIN')){
            menuTop.lstMenuLi.push({url:'/admin', name:"Administration"},
                {url:'/admin/collection',name:"Gestion des livres"},
                {url:'/admin/author',name:"Gestion des Auteurs"},
                {url:'/admin/edition',name:"Maison d'éditions"})
        }
    }else{
        menuBot.lstMenuLi.push({url:'/login',name:'Se connecter'})
    }

    return(
        <div className="bg-[#2b2d31] min-h-[100vh] lg:min-w-[230px] lg:max-w-[230px] flex flex-col justify-between py-[20px]">
            <MenuGroup key="top" lstMenuLi={menuTop.lstMenuLi}/>
            <MenuGroup key="bot" lstMenuLi={menuBot.lstMenuLi}/>
        </div>
    )
}

export default Header;