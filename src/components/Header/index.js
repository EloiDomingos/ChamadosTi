import { useContext } from 'react';
import avatarImg from '../../assets/avatar.png';
import {AuthContext} from '../../contexts/auth';
import {FiHome, FiUser, FiSettings} from 'react-icons/fi';
import './header.css';

function Header(){

    const {user} = useContext(AuthContext);


    return(
        <div className='sidebar'>
            <div>
                <img src={user.avatarUrl === null ? avatarImg : user.avatarUrl} alt='Foto do usuario'/>
            </div>

            <a href='/dashboard'>
                <FiHome color="#FFF" size={24}/>
                Chamados
            </a>
            <a href='/customers'>
                <FiUser color="#FFF" size={24}/>
                Clientes
            </a>
            <a href='/profile'>
                <FiSettings color="#FFF" size={24}/>
                Perfil
            </a>

        </div>
    )
}

export default Header;