import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './App.css'
import { LanguageProvider } from './i18n/LanguageContext'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {

  return (
    <LanguageProvider>
      <div className="App">
        <NavBar />
        <Banner />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
