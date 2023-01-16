import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Perfil from "../pages/Perfil";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
    const { signed } = useAuth();
    
    return signed > 0 ? <Item /> : <Login/>
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
        <Fragment>
            <Routes>
                <Route path="*" element={<Login/>}/>
                <Route path="/" element={<Login/>} />
                <Route exact path="/perfil" element={<Private Item={Perfil}/>} />
                <Route exact path="/cadastro" element={<Cadastro/>} />
            </Routes>
        </Fragment>
        </BrowserRouter>
    );

};

export default RoutesApp;