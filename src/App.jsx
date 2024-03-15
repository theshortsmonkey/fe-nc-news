import './App.css'
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { CurrUserProvider } from './contexts/CurrUser'
import { useEffect, useState } from 'react';
import { TopicsSideBar } from './components/SideBars/TopicsSideBar';
import { ArticlesSideBar } from './components/SideBars/ArticlesSideBar';
import { Routing } from './Routing';

function App() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  return (
    <CurrUserProvider>
      <Header/>
      <main>
        {width>1000 ? <TopicsSideBar /> : null}
        <div id='main-content'>
        <Routing />
        </div>
        {width>1000 ? <ArticlesSideBar /> : null}
      </main>
      <Footer/>
    </CurrUserProvider>
  )
}

export default App
