import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    text: 'Aluguei uma lancha para comemorar meu aniversário e foi uma experiência incrível. Equipamento impecável e atendimento de primeira.',
    rating: '★★★★★',
    source: 'Lancha Phantom 303'
  },
  {
    text: 'Os quadriciclos do M.O.V.E são fantásticos! Passei um final de semana explorando trilhas e a experiência superou todas as expectativas.',
    rating: '★★★★★',
    source: 'Quadriciclo Honda TRX'
  },
  {
    text: 'Aluguei jets para um evento corporativo de team building e foi um sucesso absoluto. Equipamentos novos e processo de reserva simplificado.',
    rating: '★★★★★',
    source: 'Jet Ski Sea-Doo GTX'
  },
];

const Testimonials = () => (
  <section className="testimonials">
    <div className="container">
      <h2>O QUE NOSSOS CLIENTES DIZEM</h2>
      <p className="subtitle">Conheça as avaliações reais de quem já aproveitou nossos serviços de aluguel</p>
      <div className="testimonial-cards">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p>"{t.text}"</p>
            <div className="rating">{t.rating}</div>
            <span>{t.source}</span>
          </div>
        ))}
      </div>
      <a href="#" className="btn">VER MAIS DEPOIMENTOS</a>
    </div>
  </section>
);

export default Testimonials;