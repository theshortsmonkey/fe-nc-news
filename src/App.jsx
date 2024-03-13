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
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { TopicsSideBar } from './components/SideBars/TopicsSideBar';
import { ArticlesSideBar } from './components/SideBars/ArticlesSideBar';

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const { pathname } = useLocation()
  const [isTopicEndpoint,setIsTopicEndpoint] = useState((/(?!\/)(topics)/).test(pathname))

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  useEffect(() => {
    setIsTopicEndpoint((/(?!\/)(topics)$/).test(pathname))
  },[pathname])
  return (
    <CurrUserProvider>
      <Header/>
      <div id="main-content">
        {width>1000 && !isTopicEndpoint ? <TopicsSideBar /> : null}
        <div id='main-div'>
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
        {width>1000 ? <ArticlesSideBar /> : null}
      </div>
      <Footer/>
    </CurrUserProvider>
  )
}

export default App
