import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

// Importa os dados
import challenges from '../../data/challenges.json';
// MUDANÇA: 'blogPosts' foi removido

// Importa os ícones
import iconAlgoritmo from '../../assets/icons/icon-algoritmo.png';
import iconPerson from '../../assets/icons/icon-person.png';
import iconFood from '../../assets/icons/icon-food.png';
import iconSunMoon from '../../assets/icons/icon-sun-moon.png';

// Componente do ícone do card "O que é um algoritmo?"
const AlgorithmIcon = () => (
  <img src={iconAlgoritmo} alt="Ícone de algoritmo" className="info-card-icon" />
);

// Componente para ícones dos desafios
const ChallengeIcon = ({ iconName, altText }) => {
  let iconSrc;
  switch (iconName) {
    case 'person':
      iconSrc = iconPerson;
      break;
    case 'food':
      iconSrc = iconFood;
      break;
    case 'sun-moon':
      iconSrc = iconSunMoon;
      break;
    case 'algoritmo': // Adicionado caso o "Minha Rotina Matinal" usasse
      iconSrc = iconAlgoritmo;
      break;
    default:
      iconSrc = iconAlgoritmo; // Ícone padrão
  }
  return <img src={iconSrc} alt={altText} className="challenge-card-icon" />;
};


function Home() {

  // MUDANÇA: Filtra o desafio "Minha rotina matinal"
  const filteredChallenges = challenges.filter(
    (challenge) => challenge.title !== "Minha Rotina Matinal"
  );

  return (
    <div className="home-content"> 
      
      {/* Seção 1 (Banner) */}
      <div className="home-header">
        <div className="container">
          <p className="welcome-text">BEM VINDO!</p>
          <h1>Aprenda programação</h1>
          <p className="home-subtitle">
            Conceitos básicos de lógica de programação para iniciantes
          </p>
        </div>
      </div>

      {/* Conteúdo principal centralizado */}
      <div className="container home-main-content">

        {/* Seção 2: O que é um algoritmo? */}
        <section className="algorithm-section">
          <div className="info-card">
            <AlgorithmIcon /> {/* <-- Ícone aqui */}
            <div className="info-text">
              <h3>O que é um algoritmo?</h3>
              <p>Um algoritmo é uma maneira de resolver problemas ou realizar tarefas.</p>
              <Link to="/blog" className="btn-secondary">Ler mais</Link>
            </div>
          </div>
        </section>

        {/* Seção 3: Desafios práticos (agora com filtro) */}
        <section className="challenges-section">
          <h2>Desafios práticos</h2>
          <p>Experimente o funcionamento de if/else por meio de exercícios</p>
          
          <div className="challenge-cards-list">
            
            {/* Mapeia os desafios FILTRADOS */}
            {filteredChallenges.map(challenge => (
              <Link key={challenge.id} to={`/desafios/${challenge.slug}`} className="challenge-card">
                <ChallengeIcon iconName={challenge.icon} altText={challenge.title} />
                <p>{challenge.title}</p>
              </Link>
            ))}

          </div>
        </section>

        {/* MUDANÇA: Seção 4 (Blog) foi REMOVIDA 
        */}
        
      </div> {/* Fim do novo container .home-main-content */}

    </div>
  );
}

export default Home;