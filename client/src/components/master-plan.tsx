import { IMAGES } from '@/lib/constants';
import SectionHeading from './section-heading';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function MasterPlan() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  
  const amenities = [
    { id: 1, name: 'Entrance Arch', icon: 'archway' },
    { id: 2, name: 'Swimming Pool', icon: 'swimming-pool' },
    { id: 3, name: 'Gazebo', icon: 'umbrella-beach' },
    { id: 4, name: 'Club House', icon: 'building' },
    { id: 5, name: 'Yoga Deck', icon: 'spa' },
    { id: 6, name: 'Reflexology Park', icon: 'shoe-prints' },
    { id: 7, name: 'Senior Citizen Park', icon: 'users' },
    { id: 8, name: 'Children\'s Play Area', icon: 'child' },
    { id: 9, name: 'Outdoor Gym', icon: 'dumbbell' }
  ];
  
  return (
    <section id="master-plan" className="py-24 bg-background relative overflow-hidden">
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
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Thoughtfully designed premium villa plots with world-class amenities at Nandi Hills
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5 animate-fade-in">
            <div 
              className="relative overflow-hidden rounded-md shadow-2xl group cursor-pointer"
              onClick={() => setIsMapOpen(true)}
            >
              <img 
                src={IMAGES.masterPlan} 
                alt="MYTHREYI AETHER - MASTER PLAN" 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6">
                  <p className="text-white text-lg font-medium">Click to enlarge master plan</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
              <div className="bg-secondary/30 p-4 rounded-md">
                <h4 className="text-lg font-playfair font-semibold text-primary mb-2">Plot Types</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-[#98FB98] inline-block mr-2 rounded-sm"></span> 30' x 40' Plots
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-[#FFD700] inline-block mr-2 rounded-sm"></span> 30' x 50' Plots
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 bg-[#FFF8DC] inline-block mr-2 rounded-sm"></span> Odd-sized Plots
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary/30 p-4 rounded-md">
                <h4 className="text-lg font-playfair font-semibold text-primary mb-2">Features</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <i className="fas fa-road text-primary mr-2 w-5"></i> 30ft Wide Roads
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-water text-primary mr-2 w-5"></i> Underground Drainage
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-lock text-primary mr-2 w-5"></i> Gated Community
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary/30 p-4 rounded-md">
                <h4 className="text-lg font-playfair font-semibold text-primary mb-2">Contact</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <i className="fab fa-whatsapp text-primary mr-2 w-5"></i> +91 78350 09615
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-globe text-primary mr-2 w-5"></i> www.aetherbymythreyi.com
                  </li>
                </ul>
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
              <h3 className="text-2xl font-playfair font-semibold text-primary mb-6">Premium Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {amenities.map(amenity => (
                  <div key={amenity.id} className="flex items-center bg-secondary/20 p-3 rounded-md hover:bg-secondary/30 transition-colors">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary/20 rounded-full mr-3">
                      <i className={`fas fa-${amenity.icon} text-primary text-sm`}></i>
                    </div>
                    <span className="text-white">
                      <span className="text-primary font-medium mr-2">{amenity.id}.</span>
                      {amenity.name}
                    </span>
                  </div>
                ))}
              </div>
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
              alt="MYTHREYI AETHER - MASTER PLAN" 
              className="w-full h-auto rounded"
            />
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-medium text-primary mb-2">Plot Types</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[#98FB98] inline-block mr-2 rounded-sm"></span> 30' x 40' Plots
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[#FFD700] inline-block mr-2 rounded-sm"></span> 30' x 50' Plots
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[#FFF8DC] inline-block mr-2 rounded-sm"></span> Odd-sized Plots
                  </li>
                </ul>
              </div>
              
              <div className="col-span-2">
                <h4 className="text-lg font-medium text-primary mb-2">Amenities Legend</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {amenities.map(amenity => (
                    <div key={amenity.id} className="flex items-center">
                      <span className="text-primary font-medium mr-1">{amenity.id}.</span>
                      <span className="text-muted-foreground text-sm">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
