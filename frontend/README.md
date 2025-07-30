# M.O.V.E

MOVE é uma plataforma digital para aluguel de veículos de lazer — como jet skis, lanchas, UTVs e quadriciclos — conectando usuários a experiências sob demanda com conveniência, segurança e alto padrão.

## Demonstração

![MOVE Screenshot](./public/MOVE.mp4)

Acesse a página principal e navegue pelas seções:
- Escolha seu veículo
- Selecione o período
- Faça o pagamento
- Aproveite sua experiência

Formulário de reserva disponível na seção principal, com seleção de veículo, datas e botão para verificar disponibilidade.

## Tecnologias Utilizadas

- **React** + **Vite**  
- **Tailwind CSS**  
- **Lucide React** (ícones)
- **JavaScript**  
- **HTML5**  
- **CSS3**

## Bibliotecas Instaladas

- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [eslint](https://eslint.org/)  
- Outras dependências padrão do React/Vite

## Estrutura do Projeto

```
frontend/
  ├── public/
  │   └── favicon.svg, logo.jpg
  ├── src/
  │   ├── App.jsx, App.css, main.jsx, index.css
  │   ├── assets/
  │   ├── components/
  │   └── pages/
  ├── data/
  │   ├── cards.json
  │   ├── categorias.json
  │   └── cidades.json
  ├── package.json
  ├── tailwind.config.js
  ├── vite.config.js
  └── README.md
```

## Seções Desenvolvidas

- **Navbar**: Navegação entre as principais categorias de veículos.
- **Hero Section**: Apresentação da plataforma e formulário de reserva.
- **Por que escolher o M.O.V.E**: Vantagens e diferenciais.
- **Como Funciona**: Passo a passo do processo de aluguel.
- **Depoimentos**: Avaliações reais de clientes.
- **Footer**: Informações institucionais, links rápidos e newsletter.

## Como Executar

1. Instale as dependências gerais:
   ```sh
   npm install
   ```
2. Instale as dependências do projeto:
   ```sh
   npm install tailwindcss @tailwindcss/vite lucide-react react-router-dom
   ```
3. Inicie o projeto:
   ```sh
   npm run dev
   ```
4. Acesse `http://localhost:5173` no navegador.

## Futuras Melhorias

- Implementar autenticação de usuários.
- Integração com sistemas de pagamento online.
- Dashboard para gerenciamento de reservas.
- Sistema de avaliação com comentários.
- Responsividade aprimorada para dispositivos móveis.
- API para consulta de disponibilidade em tempo real.
- Adicionar mais categorias de veículos e experiências.

## Contato

Para dúvidas ou sugestões, envie um e-mail para contato@exemplo.com.br

---

&copy; 2024 MOVE. Todos os direitos reservados.