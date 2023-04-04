import logo from '../../assets/logo.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';

function SignUp(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signUp, loadingAuth} = useContext(AuthContext);

async function cadastroUsuario(e){
    e.preventDefault();

    if(name !== "" && email !== "" && password !== ""){
        await signUp(email, password, name)
    } 
}

    return(
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="logo do sistema"/>
                </div>

                <form onSubmit={cadastroUsuario}>
                    <h1>Criar seu cadastro</h1>
                    <input type="text" placeholder="Digite seu nome" value={name} onChange={(e)=> setName(e.target.value)}/>
                    <input type="text" placeholder="email@email.com" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <input type="password" placeholder="********" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <button type="submit">{loadingAuth ? 'Carregando': 'Cadastrar'}</button>
                </form>

                <a href="/"> Já tem cadastro ? Entrar</a>

            </div>
        </div>
    )
}

export default SignUp;