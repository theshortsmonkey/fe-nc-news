import './App.css'
import { Articles } from './components/Articles';
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { SingleArticle } from './components/SingleArticle';
import { CurrUserProvider } from './contexts/CurrUser'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <CurrUserProvider>
      <Header/>
      <div id="main-content">
        <Routes>
          <Route path='/' element={<Articles/>} />
          <Route path='/articles/:article_id' element={<SingleArticle/>} />
        </Routes>
      </div>
      <Footer/>
    </CurrUserProvider>
  )
}

export default App
