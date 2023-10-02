import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { NavBar } from './components';
import { Home } from './pages';

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Home />
      </BrowserRouter>
    </>
  )
}

export default App
