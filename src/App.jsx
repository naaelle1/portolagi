import MainLayout from './layouts/MainLayout';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <MainLayout>
      {/* Landing Page Hero Section */}
      <Hero />

      {/* About Me Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Certificates & Achievements Section */}
      <Certificates />

      {/* Contact Section */}
      <Contact />

      {/* Retro Footer */}
      <Footer />
    </MainLayout>
  );
}