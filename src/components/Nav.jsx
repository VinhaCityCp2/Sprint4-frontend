import { } from "react";
import './Nav.scss';
import { Link, useNavigate } from "react-router-dom";



export default function Nav ( ){
     
    return(
        <>
        <nav>
            <div className="menu_logo">
                <img className="logo_img" src="\src\assets\LogoAquaAlert.png" alt="Logo do AquaAlert" />

                <h1 className="logo_nome"> AquaAlert </h1>
            </div>
            
            <div className="menu_geral">
                <ul className="menu_nav">
                    
                    <li>
                        <Link to='menu' className='rotas'>Menu</Link>
                    </li>
                    
                    <li>
                        <Link to='doacao' className='rotas'>Doação</Link>
                    </li>
                    
                    <li>
                        <Link to='login' className='rotas'>Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
            
        
        </>
    )
}