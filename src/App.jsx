import './App.css'
import { CurrUserProvider } from './contexts/CurrUser'
import { Header } from './components/Header/Header'
import { MainContent } from './components/MainContent/MainContent'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <CurrUserProvider>
      <Header />
      <MainContent />
      <Footer />
    </CurrUserProvider>
  )
}

export default App
