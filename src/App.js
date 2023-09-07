import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Studio, Projects, Akaido, NewsPage, ContactPage } from "./pages";

function App() {
  return (
    <div className="font-nunito bg-yellow-50/30">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/akaido" element={<Akaido />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
};

export default App;