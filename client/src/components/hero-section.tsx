import { IMAGES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img 
        src={IMAGES.hero} 
        alt="Luxury villa plots near Nandi Hills" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent opacity-80"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-playfair font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="block text-primary">Premium Villa Plots</span>
          <span className="block text-white mt-2">Near Nandi Hills</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl font-cormorant text-muted-foreground max-w-3xl mx-auto mb-8 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          BMRDA-approved gated community with luxury amenities and breathtaking views
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="inline-flex mt-4 gold-border-gradient">
            <p className="px-6 py-3 text-primary text-sm md:text-base uppercase tracking-widest">
              Pay just 30% & Enjoy "No Pre EMI Till Plot Registration"
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Button 
            variant="default" 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white uppercase tracking-wider transition-all duration-500 ease-in-out transform hover:shadow-md"
          >
            <a href="#plots" className="w-full">Explore Plots</a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary/90 hover:text-background uppercase tracking-wider transition-all duration-500 ease-in-out transform hover:shadow-md"
          >
            <a href="#contact" className="w-full">Book a Site Visit</a>
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <a 
          href="#highlights" 
          className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300 animate-bounce"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </motion.div>
    </section>
  );
}
