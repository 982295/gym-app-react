import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDeatails from "./pages/ExerciseDeatails";
import Footer from "./components/Footer";

function App() {
  return (
    <Box width={"400px"} sx={{width : {xl:"1488px"}}} m={"auto"}>
      <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDeatails />} />
        </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
