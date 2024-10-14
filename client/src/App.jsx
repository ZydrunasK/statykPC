import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextWrapper } from './context/GlobalContext';
import { NotFound } from "./pages/NotFound.jsx";
import { Main } from "./pages/Main.jsx";

export function App() {

  return (
      <ContextWrapper>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Main />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      </ContextWrapper>
  )
}


