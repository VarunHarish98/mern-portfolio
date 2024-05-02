// import { Main } from "./Components/Main";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/main";



export default function App() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}