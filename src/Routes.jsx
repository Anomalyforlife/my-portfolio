import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Contact from "./pages/contact";
import { useMediaQuery } from "@chakra-ui/react";

export default function Router() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing isLargerThan800={isLargerThan800}/>}/>
        <Route path="contact" element={<Contact isLargerThan800={isLargerThan800}/>} />
        <Route path="*" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}