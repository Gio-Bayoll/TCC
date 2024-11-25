import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import { Menu } from "./components/Menu";
import "./index.css";
import ChatSupport from "./components/Chat-Support";
import Footer from "./components/Footer";


const participants = [
  "Márcio Nasser",
  "Gustavo Macedo",
  "Leticia Porto",
  "Ingrid Pereira",
  "Gustavo Paschoal",
  "Kawe Carvalho",
  "Giovanni Bayoll",
];


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <AppRoutes />
      <ChatSupport />
      <Footer
        systemName="Dengue Check"
        version="1.0.0"
        siteOwner="Sistema Nacional de Saúde"
        participants={participants}
      />
    </BrowserRouter>
  </StrictMode>
);
