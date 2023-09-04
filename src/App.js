import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import GrammerPart from "./Components/Pages/GrammerPart";
import WritingPart from "./Components/Pages/WritingPart";
import NotFound from "./Components/Pages/NotFound";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/Pages/About/About";
import Google from "./Data/Paragraphs/Google";
import { MobileNav } from "./Components/MobileNav";
import ImpOfFb from "./Data/Paragraphs/ImpOfFb";
import AWddingCeremony from "./Data/Paragraphs/aWeddingCere";
import Corruption from "./Data/Paragraphs/Corruption";
function App() {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  return (
    <>
      {/* <Navbar /> */}
      {isSmallScreen ? <MobileNav /> : <Navbar />}
      {/* <MobileNav style={{ zIndex: "2" }} /> */}
      <Box as="main" className="Container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writingpart" element={<WritingPart />} />
          <Route path="/grammerpart" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          {/*  */}

          <Route path="/google" element={<Google />} />

          <Route path="/impactsoffb" element={<ImpOfFb />} />

          <Route path="/corruption" element={<Corruption />} />
          <Route
            path="/aweddingceremonyyouhaveattended"
            element={<AWddingCeremony />}
          />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
