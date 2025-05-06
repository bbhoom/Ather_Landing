import { useState } from 'react';
import { GALLERY_IMAGES } from '@/lib/constants';
import SectionHeading from './section-heading';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <SectionHeading 
            title="" 
            highlightedWord="Gallery" 
            alignment="center"
          />
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the premium lifestyle and stunning views that Aether by Mythreyi offers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <div 
              key={image.id}
              className="animate-fade-in overflow-hidden rounded-md h-64 relative group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="p-4 text-white font-medium">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <Button 
            variant="outline" 
            size="lg" 
            className="px-10 py-4 border-primary text-primary hover:bg-primary/95 hover:text-background uppercase tracking-wider text-sm font-medium transition-all duration-500 ease-in-out hover:shadow-md"
          >
            <a href="#contact" className="w-full">Schedule a Visit</a>
          </Button>
        </div>
      </div>
      
      {/* Image Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-background/95 border-primary/30 p-2">
          <div className="overflow-auto">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Gallery Image Full View" 
                className="w-full h-auto"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
