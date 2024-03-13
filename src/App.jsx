import './App.css'
import { Articles } from './components/Articles/Articles';
import { ErrorComponent } from './components/ErrorComponent';
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { Home } from './components/Home';
import { SingleArticle } from './components/Articles/SingleArticle';
import { Topics } from './components/Topics/Topics';
import { User } from './components/User/User';
import { CurrUserProvider } from './contexts/CurrUser'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <CurrUserProvider>
      <Header/>
      <div id="main-content">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/articles' element={<Articles/>} />
          <Route path='/articles/:article_id' element={<SingleArticle/>} />
          <Route path='/topics' element={<Topics/>} />
          <Route path='/topics/:topic_slug' element={<Topics/>} />
          <Route path='/user' element={<User />} />
          <Route path="*" element={<ErrorComponent route='not found'/>} />
        </Routes>
      </div>
      <Footer/>
    </CurrUserProvider>
  )
}

export default App
