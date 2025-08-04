import NavBar from './components/NavBar'
import PersonSpotlight from './components/PersonSpotlight'
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
        <PersonSpotlight 
          name="ADAM BACK"
          title="Member of the advisory board of the Bitcoin Academic Center at GW"
          imageSrc="/back.png"
          imageAlt="Adam Back"
        />
        <Pillars />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
} 