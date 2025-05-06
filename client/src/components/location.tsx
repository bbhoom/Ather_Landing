import { LOCATION_LANDMARKS, IMAGES } from '@/lib/constants';
import SectionHeading from './section-heading';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-gradient-to-b from-background to-secondary/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <SectionHeading 
            title="Location" 
            highlightedWord="Advantages" 
            alignment="center"
          />
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strategically located for convenience while maintaining the tranquility of nature.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {LOCATION_LANDMARKS.map((landmark, index) => (
                <div 
                  key={landmark.id}
                  className="bg-secondary/30 p-6 rounded-md"
                >
                  <div className="flex items-center mb-3">
                    <i className={`fas fa-${landmark.icon} text-primary mr-3 text-xl`}></i>
                    <h4 className="text-white font-medium">{landmark.name}</h4>
                  </div>
                  <p className="text-primary font-semibold">{landmark.time}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-3 animate-fade-in">
            <div className="rounded-md overflow-hidden h-full shadow-2xl border border-primary/30">
              <img 
                src={IMAGES.locationMapDetailed} 
                alt="Aether Location Map" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
