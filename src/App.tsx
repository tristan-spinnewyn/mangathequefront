import React, {useState} from 'react';
import './App.css';
import {isConnected} from "./services/authService";
import Header from "./components/header/header";
import {Routes, Route, HashRouter as Router} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Logout from "./pages/logout";
import Account from "./pages/account";
import Author from "./pages/admin/author/author";
import AddOrUpdateAuthor from "./pages/admin/author/addOrUpdateAuthor";
import Editeur from "./pages/admin/editeur/editeur";
import AddOrUpdateEditeur from "./pages/admin/editeur/addOrUpdateEditeur";
import Serie from "./pages/admin/serie/serie";
import AddOrUpdateSerie from "./pages/admin/serie/addOrUpdateSerie";
import Edition from "./pages/admin/edition/edition";
import AddTome from "./pages/admin/tome/addTome";
import UpdateTome from "./pages/admin/tome/updateTome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {
    faArrowRight,
    faArrowRightFromBracket, faBook,
    faCalendarDays,
    faGear,
    faList,
    faMagnifyingGlass,
    fas,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import Search from "./pages/search";
import Auteurs from "./pages/auteurs";
import Editeurs from "./pages/editeurs";
import SerieUser from "./pages/serieUser";

library.add(fas,faGear,faUser,faList,faCalendarDays,faMagnifyingGlass,faArrowRightFromBracket,faBook,faArrowRight)

export const AuthContext = React.createContext({
    isConnected: false,
    setConnected: (value: any) => {
    }
})

function App() {
    const [auth, setAuth] = useState(isConnected())
    const contextValue = {
        isConnected: auth,
        setConnected: setAuth
    }

    return (
        <AuthContext.Provider value={contextValue}>
            <div className='app bg-[#000000] min-h-[100vh] flex'>
                <Router>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/planning"/>
                        <Route path="/search" element={<Search/>}/>
                        <Route path="/collection"/>
                        <Route path="/account" element={<Account/>}/>
                        <Route path="/logout" element={<Logout />}/>
                        <Route path="/auteur/:id" element={<Auteurs/>}/>
                        <Route path="/editeur/:id" element={<Editeurs/>}/>
                        <Route path="/serie/:id" element={<SerieUser/>}/>
                        <Route path="/admin/auteur/:id" element={<AddOrUpdateAuthor />}/>
                        <Route path="/admin/auteur/add" element={<AddOrUpdateAuthor />}/>
                        <Route path="/admin/auteur" element={<Author/>}/>
                        <Route path="/admin/editeur/:id" element={<AddOrUpdateEditeur />}/>
                        <Route path="/admin/editeur/add" element={<AddOrUpdateEditeur />} />
                        <Route path="/admin/editeur" element={<Editeur/>}/>
                        <Route path="/admin/serie/:id" element={<AddOrUpdateSerie/>}/>
                        <Route path="/admin/serie/add"  element={<AddOrUpdateSerie/>}/>
                        <Route path="/admin/serie" element={<Serie/>}/>
                        <Route path="/admin/edition/:id" element={<Edition />}/>
                        <Route path="/admin/tome/:id/add" element={<AddTome />}/>
                        <Route path="/admin/tome/:id" element={<UpdateTome/>}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/register" element={<Register/>}/>
                    </Routes>
                </Router>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
