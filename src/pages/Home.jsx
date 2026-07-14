import MainLayout from '../layouts/MainLayout'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Resume from '../sections/Resume'
import Contact from '../sections/Contact'

function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
    </MainLayout>
  )
}

export default Home