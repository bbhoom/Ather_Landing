import { AMENITIES, ADDITIONAL_AMENITIES, INFRASTRUCTURE_HIGHLIGHTS } from '@/lib/constants';
import SectionHeading from './section-heading';

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-secondary/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <SectionHeading 
            title="Ready To Use" 
            highlightedWord="Amenities" 
            alignment="center"
          />
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enjoy a range of premium amenities designed for your comfort and leisure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AMENITIES.map((amenity, index) => (
            <div 
              key={amenity.id}
              className="animate-fade-in relative overflow-hidden rounded-md group h-80"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={amenity.image} 
                alt={amenity.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/50 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <i className={`fas fa-${amenity.icon} text-primary text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-white mb-2">{amenity.title}</h3>
                  <p className="text-muted-foreground">{amenity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Additional Amenities */}
          <div className="bg-background/30 p-8 rounded-md animate-fade-in">
            <h3 className="text-xl font-playfair font-semibold text-primary mb-6">More Premium Amenities</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ADDITIONAL_AMENITIES.map((amenity, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-muted-foreground">{amenity}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Infrastructure Highlights */}
          <div className="bg-background/30 p-8 rounded-md animate-fade-in">
            <h3 className="text-xl font-playfair font-semibold text-primary mb-6">Infrastructure Highlights</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INFRASTRUCTURE_HIGHLIGHTS.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
