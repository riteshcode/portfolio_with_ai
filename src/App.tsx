import { ChatWidget } from './chat/ChatWidget'
import { Cta } from './components/Cta'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Integrations } from './components/Integrations'
import { Marquee } from './components/Marquee'
import { Nav } from './components/Nav'
import { Skills } from './components/Skills'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Skills />
      <Experience />
      <Integrations />
      <Education />
      <Cta />
      <Footer />
      <ChatWidget />
    </>
  )
}

export default App
