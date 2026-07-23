import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Experience from '../sections/Experience'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Resume from '../sections/Resume'
import Skills from '../sections/Skills'

function Home() {
  return (
    <>
      <a
        className="skip-link"
        href="#contenu-principal"
      >
        Aller au contenu principal
      </a>

      <Navbar />

      <main
        id="contenu-principal"
        tabIndex="-1"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default Home