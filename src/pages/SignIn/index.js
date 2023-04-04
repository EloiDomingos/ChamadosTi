import "./signin.css";
import logo from '../../assets/logo.png';
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";

function SignIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signIn, loadingAuth} = useContext(AuthContext);

    async function loginUsuario(e){
        e.preventDefault();

        if(email !== "" && password !== ""){
            await signIn(email, password);
        }
    }

    return(
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="logo do sistema"/>
                </div>

                <form onSubmit={loginUsuario}>
                    <h1>Entrar</h1>
                    <input type="text" placeholder="email@email.com" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <input type="password" placeholder="********" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <button type="submit">{loadingAuth ? "Carregando" : "Acessar"}</button>
                </form>

                <a href="/cadastro"> Criar uma conta</a>

            </div>
        </div>
    )
}

export default SignIn;