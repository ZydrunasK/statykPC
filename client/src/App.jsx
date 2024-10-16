import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextWrapper } from './context/GlobalContext';
import { NotFound } from "./pages/NotFound.jsx";
import { Main } from "./pages/Main.jsx";
import { Login } from "./pages/Login.jsx";
import { PublicLayout } from "./layout/PublicLayout.jsx";
import { UserLayout } from "./layout/UserLayout.jsx";

export function App() {

  return (
      <ContextWrapper>
      <BrowserRouter>
        <Routes>
          <Route Component={PublicLayout}>
            <Route index path='/' element={<Main />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Route>

          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      </ContextWrapper>
  )
}


