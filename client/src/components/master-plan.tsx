import { IMAGES } from '@/lib/constants';
import SectionHeading from './section-heading';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function MasterPlan() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Overlay background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23D4AF37\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <SectionHeading 
            title="Master" 
            highlightedWord="Plan" 
            alignment="center"
          />
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5 animate-fade-in">
            <div 
              className="relative overflow-hidden rounded-md shadow-2xl group cursor-pointer"
              onClick={() => setIsMapOpen(true)}
            >
              <img 
                src={IMAGES.masterPlan} 
                alt="Aether Master Plan" 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6">
                  <p className="text-white text-lg font-medium">Click to enlarge master plan</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 animate-fade-in">
            <img 
              src={IMAGES.locationMap} 
              alt="Aether Location Map" 
              className="w-full h-auto rounded-md shadow-xl mb-10" 
            />
            
            <div className="mt-8">
              <h3 className="text-2xl font-playfair font-semibold text-primary mb-6">Proximity to Major Landmarks</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span className="text-muted-foreground">15 minutes from NH 44 (Nandi Upachar)</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span className="text-muted-foreground">10 minutes from JW Marriott in Prestige Golfshire</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span className="text-muted-foreground">36 minutes from International Airport</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span className="text-muted-foreground">Close to educational institutions and hospitals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Master Plan Dialog */}
      <Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
        <DialogContent className="max-w-6xl bg-background border-primary/30">
          <div className="overflow-auto p-1">
            <img 
              src={IMAGES.masterPlan} 
              alt="Aether Master Plan Full View" 
              className="w-full h-auto rounded"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
