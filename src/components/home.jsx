// import { useState, useEffect, useCallback } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Analytics } from "@vercel/analytics/react"
// import GlobalStyles    from "./GlobalStyles";
// import Navbar from "./Navbar";
// import Hero from "./Hero";
// import About from "./About";
// import FloorPlans from "./FloorPlans";
// import Amenities from "./Amenities";
// import Gallery         from "./Gallery";
// import DeveloperStrip  from "./DeveloperStrip";
// import Location        from "./Location";
// import Footer          from "./Footer";
// import FloatingBar     from "./FloatingBar";
// import EnquiryModal    from "./EnquiryModal";
// import FloatingWhatsApp from "./FloatingWhatsApp";
// export default function home() {
//   const [modalConfig, setModalConfig] = useState(null);

//   const openEnquiry  = useCallback((config) => setModalConfig(config), []);
//   const closeEnquiry = useCallback(() => setModalConfig(null), []);
//   useEffect(() => {openEnquiry();}, [])
//   return(
//     <>  
//       <Route>
//         <Route path="/" element={<hom />} />
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
//       </Route>
//       <Analytics />
//     </>
//   )
// }