import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header/";
import Veiculos from "./pages/Veiculos";
import Layout from "./components/Layout";
{
  /*
import Sobre from "./pages/Sobre";
import ComoFunciona from "./pages/ComoFunciona";
import Contato from "./pages/Contato";
import ListaVeiculos from "./pages/ListaVeiculos";
import Sobre from "./pages/Sobre";
import Sobre from "./pages/Sobre";
import Sobre from "./pages/Sobre";
import Sobre from "./pages/Sobre";
*/
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veiculos" element={<Veiculos />} />
          {/*
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/contato" element={<Contato />} />

        <Route path="/veiculos" element={<ListaVeiculos />} />
        <Route path="/veiculos/:id" element={<DetalheVeiculo />} />

        <Route path="/alugar/:veiculo" element={<FormularioAluguel />} />
        <Route path="/confirmacao" element={<Confirmacao />} />
        <Route path="/alugueis" element={<ListaAlugueis />} />
        <Route path="/alugueis/:id" element={<DetalheAluguel />} />

        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cliente" element={<AreaCliente />} />

        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/admin/alugueis" element={<AdminAlugueis />} />
        <Route path="/admin/veiculos" element={<AdminVeiculos />} />
        <Route path="/admin/clientes" element={<AdminClientes />} />
      */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
