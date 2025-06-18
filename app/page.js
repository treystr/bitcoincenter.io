import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import VantaFog from './components/VantaFog'
import VantaNet from './components/VantaNet'

export default function Home() {
  const VantaBackground = VantaFog
  return (
    <>
    <VantaBackground />
    <NavBar />
      <main>
        <Hero />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
} 