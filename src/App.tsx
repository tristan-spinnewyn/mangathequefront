import React, {useState} from 'react';
import './App.css';
import {isConnected} from "./services/authService";
import Header from "./components/header/header";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";

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
                        <Route path="/search"/>
                        <Route path="/account"/>
                        <Route path="/logout"/>
                        <Route path="/collection"/>
                        <Route path="/admin"/>
                        <Route path="/admin/collection"/>
                        <Route path="/admin/author"/>
                        <Route path="/admin/edition"/>
                        <Route path="/login" element={<Login />}/>
                    </Routes>
                </Router>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
