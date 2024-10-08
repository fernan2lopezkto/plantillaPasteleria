import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import AlertPlantilla from "./components/AlertPlantilla"
import ResponsiveAppBar from "./components/AppBar";
import Home from "./components/Home";
import Especialidad from "./components/Especialidad";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import Servicios from "./components/Servicios";
import About from "./components/About";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme3"; // Importa el tema

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <AlertPlantilla />
      <Home />
      <Especialidad />
      <PreguntasFrecuentes />
      <Servicios />
      <About />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
