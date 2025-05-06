import { PLOT_DIMENSIONS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import SectionHeading from './section-heading';

export default function PlotDimensions() {
  return (
    <section id="plots" className="py-24 bg-gradient-to-b from-background to-secondary/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <SectionHeading 
            title="Plot" 
            highlightedWord="Dimensions" 
            alignment="center"
          />
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select from our variety of premium plot sizes to build your dream villa in the serene surroundings of Nandi Hills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLOT_DIMENSIONS.map((plot, index) => (
            <div 
              key={plot.id}
              className={`
                bg-secondary/40 rounded-md overflow-hidden hover-scale animate-fade-in
                ${plot.isPopular ? 'transform transition-all duration-300 scale-105 shadow-xl' : ''}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {plot.isPopular && (
                <div className="bg-primary/20 p-1 text-center">
                  <p className="text-xs uppercase tracking-wider text-primary font-medium">Most Popular</p>
                </div>
              )}
              <div className="p-8 border-b border-primary/30">
                <h3 className="font-playfair text-2xl font-semibold text-center text-primary">{plot.size}</h3>
                <p className="text-center text-3xl font-light mt-4 text-white">{plot.area}</p>
              </div>
              <div className="p-8 text-center">
                <div className="mb-6">
                  <span className="text-muted-foreground text-sm uppercase tracking-wider">Starting From</span>
                  <p className="text-xl font-medium text-white mt-1">Contact For Price</p>
                </div>
                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full py-3 bg-primary hover:bg-primary/90 text-background font-medium uppercase tracking-wider text-sm"
                >
                  <a href="#contact" className="w-full">Get Price</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <Button 
            variant="outline" 
            size="lg" 
            className="px-10 py-4 border-primary text-primary hover:bg-primary hover:text-background uppercase tracking-wider text-sm font-medium"
          >
            <a href="#contact" className="w-full">Book a Site Visit</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
