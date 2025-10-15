import { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import SuccessModal from './components/SuccessModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSuccess = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onProjectsClick={scrollToProjects} onContactClick={scrollToContact} />
      <Hero onContactClick={scrollToContact} />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <ContactForm onSuccess={handleFormSuccess} />
      </div>
      <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 PSDeveloper. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
