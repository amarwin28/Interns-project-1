import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Team } from './components/Team';
import { Expertise } from './components/Expertise';
import { Objective } from './components/Objective';
import { Process } from './components/Process';
import { Technologies } from './components/Technologies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Expertise />
        <Objective />
        <Process />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
