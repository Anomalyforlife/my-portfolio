import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Contact from "./pages/contact";

export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
