
import './App.css'
import {Outlet} from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer.tsx";
import Box from "@mui/material/Box";
import {Container} from "@mui/material";

function App() {

  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default App
