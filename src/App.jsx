import './App.css'
import { Articles } from './components/Articles';
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { CurrUserProvider } from './contexts/CurrUser'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <CurrUserProvider>
      <Header/>
      <div id="main-content">
        <Routes>
          <Route path='/' element={<Articles/>} />
        </Routes>
      </div>
      <Footer/>
    </CurrUserProvider>
  )
}

export default App
