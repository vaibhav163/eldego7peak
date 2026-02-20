import { useState, useCallback } from "react";

import GlobalStyles    from "./components/GlobalStyles";
import Navbar          from "./components/Navbar";
import Hero            from "./components/Hero";
import About           from "./components/About";
import FloorPlans      from "./components/FloorPlans";
import Amenities       from "./components/Amenities";
import Gallery         from "./components/Gallery";
import DeveloperStrip  from "./components/DeveloperStrip";
import Location        from "./components/Location";
import Footer          from "./components/Footer";
import FloatingBar     from "./components/FloatingBar";
import EnquiryModal    from "./components/EnquiryModal";

export default function App() {
  /* null = closed, string = selected config e.g. "3 BHK" */
  const [modalConfig, setModalConfig] = useState(null);

  const openEnquiry  = useCallback((config) => setModalConfig(config), []);
  const closeEnquiry = useCallback(() => setModalConfig(null), []);

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero           onEnquire={openEnquiry} />
      <About />
      <FloorPlans     onEnquire={openEnquiry} />
      <Amenities />
      <Gallery />
      <DeveloperStrip />
      <Location />
      <Footer />
      <FloatingBar    onEnquire={openEnquiry} />
      {modalConfig !== null && (
        <EnquiryModal config={modalConfig} onClose={closeEnquiry} />
      )}
    </>
  );
}
