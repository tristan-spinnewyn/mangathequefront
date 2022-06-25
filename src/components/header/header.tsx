import {ArrayMenuLi} from "../../interface/header/headerInterface";
import {AuthContext} from "../../App";
import {useContext} from "react";
import {getRoles} from "../../services/authService";
import MenuGroup from "./menuGroup";

function Header(){
    const menuTop: ArrayMenuLi = {lstMenuLi: []}
    const menuBot: ArrayMenuLi = {lstMenuLi: []}
    const context = useContext(AuthContext)

    menuTop.lstMenuLi.push({url:'/', name:'Nouveautés', icon:'list', prefix:'fas'},
        {url:'/planning',name:'Planning', icon:'calendar-days', prefix:'fas'},
        {url:'/search',name:'Recherche',icon:'magnifying-glass',prefix:'fas'})

    if(context.isConnected){
        menuBot.lstMenuLi.push({url:'/account',name:'Mon compte',icon:'user', prefix:'fas'})
        menuBot.lstMenuLi.push({url:'/logout',name:'Se déconnecter',icon:'arrow-right-from-bracket',prefix:'fas'})
        menuBot.lstMenuLi.push({url:'/collection', name: 'Ma collection',icon:'book',prefix:'fas'})
        const roles = getRoles();
        if(roles.includes('ROLE_ADMIN')){
            menuTop.lstMenuLi.push({url:'/admin/auteur', name:"Administration",icon:'gear',prefix:'fas'})
        }
    }else{
        menuBot.lstMenuLi.push({url:'/login',name:'Se connecter',icon:'arrow-right',prefix:'fas'})
    }

    return(
        <div className="min-h-[100vh] lg:min-w-[230px] lg:max-w-[230px] w-[50px]">
            <div className="bg-[#2b2d31] min-h-[100vh] lg:min-w-[230px] w-[40px] lg:max-w-[230px] flex flex-col justify-between py-[20px] fixed">
                <MenuGroup key="top" lstMenuLi={menuTop.lstMenuLi}/>
                <MenuGroup key="bot" lstMenuLi={menuBot.lstMenuLi}/>
            </div>
        </div>
    )
}

export default Header;