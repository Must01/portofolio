import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { Home } from "./pages/Home";
import { DemoPlaceholder } from "./pages/DemoPlaceholder";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      {/* Shared header */}
      <Navbar />

      {/* Page content */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="demo/:project" element={<DemoPlaceholder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Shared footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
