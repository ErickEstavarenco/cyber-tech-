import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css'; // Usando CSS Modules
import { useAuth } from '../context/AuthContext'; // Ajuste o caminho se necessário
import { signOut } from 'firebase/auth';
import { auth } from '../../FirebaseConfig.js'; // Ajuste o caminho se necessário

function Header() {
    const { currentUser } = useAuth(); //
    const navigate = useNavigate(); //

    // Sua função de logoff (Mantida)
    const handleLogoff = async () => { //
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error("Erro ao fazer logoff:", error);
        }
    };

    // Sua função para pegar o primeiro nome (Mantida)
    const getFirstName = (fullName) => { //
        if (!fullName) return '';
        const firstName = fullName.split(' ')[0];
        return firstName.charAt(0).toUpperCase() + firstName.slice(1);
    };

    // Sua função de navegação protegida (Mantida)
    const handleNavigation = (path) => { //
        if (currentUser) {
            // Se o usuário estiver logado, navega normalmente
            navigate(path);
        } else {
            // Se estiver deslogado, mostra o alerta e navega para o login
            alert("Você precisa estar logado para acessar este serviço.");
            navigate('/login');
        }
    };

    return (
        // 1. CORREÇÃO: Era 'styles.siteHeader', mudou para 'styles.header'
        <header className={styles.header}> {/* */}
            
            {/* 2. CORREÇÃO: Era 'styles.headerContent', mudou para 'styles.navContainer' */}
            <div className={`container ${styles.navContainer}`}> {/* */}
                
                {/* 3. CORREÇÃO: 'styles.logo' está correto em ambos os arquivos */}
                <Link to="/" className={styles.logo}> {/* */}
                    {currentUser ? `BEM VINDO, ${getFirstName(currentUser.name)}!` : "BEM VINDO!"}
                </Link>

                {/* 4. CORREÇÃO: Era 'styles.mainNav', mudou para 'styles.nav' */}
                <nav className={styles.nav}> {/* */}
                    
                    {/* 5. CORREÇÃO: O novo CSS não tem '.navButton'. 
                       Usamos '.navLink' para todos os itens terem o mesmo estilo. 
                    */}
                    <Link to='/' className={styles.navLink}>
                        Início
                    </Link>
                    <button onClick={() => handleNavigation('/blog')} className={styles.navLink}> {/* */}
                        Blog
                    </button>
                    <button onClick={() => handleNavigation('/desafios')} className={styles.navLink}> {/* */}
                        Desafios
                    </button>

                    {/* Lógica de Login/Logoff */}
                    {currentUser ? (
                        // 6. CORREÇÃO: O novo CSS não tem '.logoffButton'. Usamos '.navLink'.
                        <button onClick={handleLogoff} className={styles.navLinkOut}> {/* */}
                            Sair
                        </button>
                    ) : (
                        // 7. CORREÇÃO: 'styles.navLink' está correto em ambos os arquivos
                        <Link to="/login" className={styles.navLink}> {/* */}
                            Login
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;