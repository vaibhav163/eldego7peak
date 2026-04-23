// import { useState, useEffect, useCallback } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Analytics } from "@vercel/analytics/react"
// import ExternalProject from "./components/ExternalProject";
// import EnquiryModal from "./components/EnquiryModal";
// import GlobalStyles    from "./components/GlobalStyles";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import FloorPlans from "./components/FloorPlans";
// import Amenities from "./components/Amenities";
// import Gallery         from "./components/Gallery";
// import DeveloperStrip  from "./components/DeveloperStrip";
// import Location        from "./components/Location";
// import Footer          from "./components/Footer";
// import FloatingBar     from "./components/FloatingBar";
// import FloatingWhatsApp from "./components/FloatingWhatsApp";

// export default function App() {
//   /* null = closed, string = selected config e.g. "3 BHK" */
//   const [modalConfig, setModalConfig] = useState(null);

//   const openEnquiry  = useCallback((config) => setModalConfig(config), []);
//   const closeEnquiry = useCallback(() => setModalConfig(null), []);
//   useEffect(() => {
//       openEnquiry();
//     }, [])

//   return (
//     <>
//      <Router>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/old-project">View HTML Project</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Hero onEnquire={openEnquiry} />} />
//         <Route path="/GlobalStyles" element={<GlobalStyles />} />
//         <Route path="/Navbar" element={<Navbar />} />
//         <Route path="/Hero" element={<Hero onEnquire={openEnquiry} />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/FloorPlans" element={<FloorPlans onEnquire={openEnquiry} />} />
//         <Route path="/Amenities" element={<Amenities />} />
//         <Route path="/Gallery" element={<Gallery />} />
//         <Route path="/DeveloperStrip" element={<DeveloperStrip />} />
//         <Route path="/Location" element={<Location />} />
//         <Route path="/Footer" element={<Footer />} />
//         <Route path="/FloatingBar" element={<FloatingBar onEnquire={openEnquiry} />} />
//         <Route path="/EnquiryModal" element={<EnquiryModal config={modalConfig} onClose={closeEnquiry} />} />
//         <Route path="/FloatingWhatsApp" element={<FloatingWhatsApp phoneNumber="919990780499" message="Hi, I am interested in your services" />} />
      
//         <Route path="/old-project" element={<ExternalProject />} />
//         </Routes>
//     </Router>
//     <Analytics />
      
      
//       {modalConfig !== null && (
//         <EnquiryModal config={modalConfig} onClose={closeEnquiry} />
//       )}
       
//     </>
//   );
// }
import { useState, useCallback } from "react";
import { Router , Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import ExternalProject from "./components/ExternalProject";
import EnquiryModal from "./components/EnquiryModal";
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FloorPlans from "./components/FloorPlans";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import DeveloperStrip from "./components/DeveloperStrip";
import Location from "./components/Location";
import Footer from "./components/Footer";
import FloatingBar from "./components/FloatingBar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Eoe from "./components/eoe";
import Privacypolicy from "./components/privacypolicy";

function Home({ onEnquire }) {
  return (
    <>
      {/* <Navbar />
       <Hero onEnquire={onEnquire} />
      <About />
      <FloorPlans onEnquire={onEnquire} />
      <Amenities />
      <Gallery />
      <DeveloperStrip />
      <Location />
      <Footer />
      <FloatingBar onEnquire={onEnquire} />
      <FloatingWhatsApp
        phoneNumber="919899911553"
        message="Hi, I am interested in your services"
      /> */}
      <Eoe />
    </>
  );
}

export default function App() {
  const [modalConfig, setModalConfig] = useState(null);

  const openEnquiry = useCallback((config = "General") => {
    setModalConfig(config);
  }, []);

  const closeEnquiry = useCallback(() => {
    setModalConfig(null);
  }, []);

  // useEffect(() => {
  //   openEnquiry("General");
  // }, [openEnquiry]);

  return (
    <>
      <GlobalStyles />
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Home onEnquire={openEnquiry} />} />
        <Route path="/eoe" element={<Eoe/>} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
      </Routes>
      {/* </Router> */}
      <Analytics />

      {modalConfig && (
        <EnquiryModal config={modalConfig} onClose={closeEnquiry} />
      )}
    </>
  );
}