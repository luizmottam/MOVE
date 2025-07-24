import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    number: 1,
    title: 'Escolha seu veículo',
    description: 'Navegue por nossas lanchas, jets, UTVs e quadriciclos e escolha o ideal para sua aventura.'
  },
  {
    number: 2,
    title: 'Selecione o período',
    description: 'Escolha por quanto tempo você deseja alugar, com opções de horas, dias ou semanas.'
  },
  {
    number: 3,
    title: 'Faça o pagamento',
    description: 'Utilize nosso sistema seguro de pagamento com diversas opções e facilidades.'
  },
  {
    number: 4,
    title: 'Aproveite sua experiência',
    description: 'Receba instruções detalhadas e aproveite ao máximo sua aventura premium.'
  },
];

const HowItWorks = () => (
  <section className="how-it-works">
    <div className="container">
      <h2>Como Funciona</h2>
      <div className="steps">
        {steps.map(step => (
          <div key={step.number} className="step">
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;