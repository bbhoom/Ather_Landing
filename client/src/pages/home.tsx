import { useEffect, useRef } from 'react';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import Highlights from '@/components/highlights';
import AboutSection from '@/components/about-section';
import WhyAether from '@/components/why-aether';
import MasterPlan from '@/components/master-plan';
import PlotDimensions from '@/components/plot-dimensions';
import Gallery from '@/components/gallery';
import Amenities from '@/components/amenities';
import Location from '@/components/location';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import FloatingWhatsapp from '@/components/floating-whatsapp';


export default function Home() {
  // Refs for scroll animations
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Setup intersection observer for animations
  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-right, .animate-slide-left, .animate-scale');

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(element => {
      observerRef.current?.observe(element);
    });

    // Cleanup observer on unmount
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <Highlights />
      <AboutSection />
      <WhyAether />
      <MasterPlan />
      <PlotDimensions />
      <Gallery />
      <Amenities />
      <Location />
      <ContactSection />
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}
