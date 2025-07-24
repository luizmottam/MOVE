import React from 'react';
import './Footer.css';
import logo from '/logo.jpg';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-logo">
          <img src={logo} alt="MOVE Logo" />
          <p>Mobility On-demand for Versatility Experience</p>
        </div>
        <div className="footer-links">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre Nós</a></li>
            <li><a href="#como-funciona">Como Funciona</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Inscreva-se para receber novidades e promoções exclusivas</p>
          <form>
            <input type="email" placeholder="Seu e-mail" />
            <button type="submit">Inscrever-se</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 MOVE. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;