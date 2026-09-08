import { About } from './components/About';
import { Catalog } from './components/Catalog';
import { Footer } from './components/Footer';
import { Grain } from './components/Grain';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LightboxProvider } from './components/Lightbox';
import { Manifesto } from './components/Manifesto';
import { Principles } from './components/Principles';
import { SmoothScroll } from './components/SmoothScroll';
import { Testimonials } from './components/Testimonials';
import { Workshop } from './components/Workshop';

export default function App() {
  return (
    <SmoothScroll>
      <LightboxProvider>
        <Grain />
        <Header />
        <main id="top" className="relative z-0">
          <Hero />
          <Manifesto />
          <About />
          <Principles />
          <Workshop />
          <Catalog />
          <Testimonials />
        </main>
        <Footer />
      </LightboxProvider>
    </SmoothScroll>
  );
}
