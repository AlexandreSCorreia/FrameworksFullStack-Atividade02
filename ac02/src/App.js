import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return(
    <section style={{
      width: '100vw',
      height: 'calc(100vh - 70px)',
      background: "url('https://i1.wp.com/www.animefeminist.com/wp-content/uploads/2022/10/eminence6.jpg?fit=1920%2C1080&ssl=1')",
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%'
    }}>
      <span style={{
        position: 'absolute',
        fontSize: '2.5rem',
        fontWeight: '600',
        left: '50%',
        bottom: '2rem',
        transform: 'translate(-50%, -50%)',
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: '3px'

    }}>welcome</span>
    </section>
  );
}

function About() {
  return (
    <section style={{
      width: '100%',
      maxWidth: '1250px',
      margin: '0 auto',
      textAlign: 'center',
      padding: '1.5rem 1rem'
    }}>
      <div style={{
        marginBottom: '1rem'
    }}>
        <h2 style={{
         fontSize: '2rem',
         textTransform: 'uppercase'
        }}>
          About
        </h2>
      </div>
      <div>
        <p style={{
          fontSize: '1.2rem',
          lineHeight: '150%',
          letterSpacing: '1px',
          textAlign: 'justify'
        }}>
          Grandes heróis e vilões diabólicos são os tipos de personagens que as pessoas desejam ser - mas não Cid Kagenou. 
          Ele deseja se tornar o verdadeiro cérebro por trás de tudo, puxando as cordas e fazendo com que suas maquinações 
          conduzam toda a história. Em sua vida anterior no Japão moderno, ele não conseguiu atingir seus objetivos. Mas agora, 
          renascido em um mundo de magia, ele mostrará a verdadeira eminência da sombra! 
          Como Cid finge ser apenas mais um personagem comum da máfia, ele recruta membros para sua organização Shadow Garden, 
          com o objetivo de derrubar o misterioso culto que se esconde nas sombras. Com muitos improvisos, Cid lidera sua 
          organização contra o nojento Diabolos Cult.
        </p>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <nav style={{
      width: '100%',
      height: '70px',
      backgroundColor: '#333',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
    }}>
        <ul style={{
          display: 'flex'
        }}>
          <li 
            style={{
              marginRight: '1rem'
            }}>
            <Link 
              to="/" 
              style={{
                 color: '#fff'
                ,transition: 'color 0.2s ease-in-out'
                ,textTransform: 'uppercase'
                ,fontWeight: 'bold'
              }}>
                Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              style={
                {color: '#fff'
                ,transition: 'color 0.2s ease-in-out'
                ,textTransform: 'uppercase'
                ,fontWeight: 'bold'
              }}>
                About
            </Link>
          </li>
        </ul>
      </nav>
  );
}

function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;