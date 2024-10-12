import './App.css';
import { Main } from './components/main/Main.jsx';
import { ContextWrapper } from './context/GlobalContext';

export function App() {

  return (
      <ContextWrapper>
         <Main />
      </ContextWrapper>
  )
}


