import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import VantaFog from './components/VantaFog'

export default function Home() {
  const VantaBackground = VantaFog
  return (
    <>
    <VantaBackground />
    <NavBar />
      <main>
        <Hero />
        <Pillars />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
} 