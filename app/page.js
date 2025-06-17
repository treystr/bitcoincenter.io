import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <>
    <NavBar />
      <main>
        <Hero />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
} 