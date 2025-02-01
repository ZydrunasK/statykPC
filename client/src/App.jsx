import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextWrapper } from './context/UserContext';
import { NotFound } from "./pages/NotFound.jsx";
import { Main } from "./pages/Main.jsx";
import { Login } from "./pages/Login.jsx";
import { PublicLayout } from "./layout/PublicLayout.jsx";
import { UserLayout } from "./layout/UserLayout.jsx";
import { AdminLayout } from "./layout/AdminLayout.jsx";
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
import { Profile } from "./pages/Profile.jsx";
import { Case } from "./pages/parts/Case.jsx";
import { Build } from "./pages/build.jsx";
import { BuildContextWrapper } from "./context/BuildContext.jsx";

export function App() {

  const mainRoutes = (  
    <>
      <Route index path='/' element={<Main />}></Route>
      <Route path='/forum' element={<Forum />}></Route>
      <Route path='/faq' element={<Faq />}></Route>
      <Route path='/Build' element={<Build />}></Route>
      <Route path='/dalys/CPU' element={<CPU />}></Route>
      <Route path='/dalys/Ausintuvai' element={<Cooler />}></Route>
      <Route path='/dalys/Pagrindines-plokstes' element={<MotherBoard />}></Route>
      <Route path='/dalys/Atmintis' element={<Memory />}></Route>
      <Route path='/dalys/Kietieji-diskai' element={<Storage />}></Route>
      <Route path='/dalys/GPU' element={<GPU />}></Route>
      <Route path='/dalys/Maitinimo-blokai' element={<PSU />}></Route>
      <Route path='/dalys/Korpusai' element={<Case />}></Route>
    </>    
  )

  return (
      <ContextWrapper>
      <BuildContextWrapper>
        <BrowserRouter>
          <Routes>

            <Route Component={PublicLayout}>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              {mainRoutes}
            </Route>

            <Route Component={UserLayout}>
              {mainRoutes}
              <Route path='/profile' element={<Profile />}></Route>
            </Route>

            <Route Component={AdminLayout}>
              <Route path='/profile' element={<Profile />}></Route>
              <Route path='/Admin-Panel' element={<Build />}></Route>
              {mainRoutes}
              <Route path='/dalys/CPU' element={<CPU />}></Route>
              <Route path='/dalys/Ausintuvai' element={<Cooler />}></Route>
              <Route path='/dalys/Pagrindines-plokstes' element={<MotherBoard />}></Route>
              <Route path='/dalys/Atmintis' element={<Memory />}></Route>
              <Route path='/dalys/Kietieji-diskai' element={<Storage />}></Route>
              <Route path='/dalys/GPU' element={<GPU />}></Route>
              <Route path='/dalys/Maitinimo-blokai' element={<PSU />}></Route>
              <Route path='/dalys/Korpusai' element={<Case />}></Route>
            </Route>

            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </BuildContextWrapper>
      </ContextWrapper>
  )
}


