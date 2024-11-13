import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextWrapper } from './context/UserContext';
import { NotFound } from "./pages/NotFound.jsx";
import { Main } from "./pages/Main.jsx";
import { Login } from "./pages/Login.jsx";
import { PublicLayout } from "./layout/PublicLayout.jsx";
import { Register } from "./pages/Register.jsx";
import { Forum } from "./pages/Forum.jsx";
import { Faq } from "./pages/Faq.jsx";
import { MotherBoard } from "./pages/parts/MotherBoard.jsx";
import { CPU } from "./pages/parts/CPU.jsx";
import { Memory } from "./pages/parts/memory.jsx";
import { GPU } from "./pages/parts/GPU.jsx";
import { Storage } from "./pages/parts/Storage.jsx";
import { Cooler } from "./pages/parts/Cooler.jsx";
import { PSU } from "./pages/parts/PSU.jsx";
import { UserLayout } from "./layout/UserLayout.jsx";
import { Profile } from "./pages/Profile.jsx";

export function App() {

  return (
      <ContextWrapper>
      <BrowserRouter>
        <Routes>
          <Route Component={PublicLayout}>
            <Route index path='/' element={<Main />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/forum' element={<Forum />}></Route>
            <Route path='/faq' element={<Faq />}></Route>
            <Route path='/Memory' element={<Memory />}></Route>
            <Route path='/Storage' element={<Storage />}></Route>
            <Route path='/MotherBoard' element={<MotherBoard />}></Route>
            <Route path='/CPU' element={<CPU />}></Route>
            <Route path='/GPU' element={<GPU />}></Route>
            <Route path='/PSU' element={<PSU />}></Route>
            <Route path='/Storage' element={<Storage />}></Route>
            <Route path='/Cooler' element={<Cooler />}></Route>
          </Route>

          <Route Component={UserLayout}>
            <Route index path='/' element={<Main />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/forum' element={<Forum />}></Route>
            <Route path='/faq' element={<Faq />}></Route>
            <Route path='/Memory' element={<Memory />}></Route>
            <Route path='/Storage' element={<Storage />}></Route>
            <Route path='/MotherBoard' element={<MotherBoard />}></Route>
            <Route path='/CPU' element={<CPU />}></Route>
            <Route path='/GPU' element={<GPU />}></Route>
            <Route path='/PSU' element={<PSU />}></Route>
            <Route path='/Storage' element={<Storage />}></Route>
            <Route path='/Cooler' element={<Cooler />}></Route>
          </Route>

          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      </ContextWrapper>
  )
}


