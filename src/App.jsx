import './App.css'
import { CurrUserProvider } from './contexts/CurrUser'
import { Header } from './components/Header/Header'
import { MainContent } from './components/MainContent/MainContent'
import { Footer } from './components/Footer/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <CurrUserProvider>
      <Header  width={width}/>
      <MainContent width={width}/>
      <Footer />
    </CurrUserProvider>
  )
}

export default App
