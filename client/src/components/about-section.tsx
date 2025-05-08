import { IMAGES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import SectionHeading from './section-heading';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-slide-right">
            <SectionHeading
              title="About"
              highlightedWord="Aether by Mythreyi"
              alignment="left"
            />

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Welcome to <span className="text-primary font-medium">Aether</span>, a <span className="text-white font-medium">BMRDA-approved gated community</span> plot near Nandi Hills. Aether offers villa plots designed to meet modern living standards.
            </p>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Nestled in a prime location, our project offers the perfect blend of an enriched lifestyle and a balanced work life. <span className="text-white font-medium">Aether villa plots</span> are the perfect canvas for you to build your dream villa as per your unique preferences and lifestyle.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our development features 30-foot concrete roads, underground drain systems, power connections, individual water connections, avenue plantations, and more.
            </p>

            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-background uppercase tracking-wider"
            >
              <a href="#contact" className="w-full">Book Now</a>
            </Button>
          </div>

          <div className="order-1 lg:order-2 animate-slide-left">
            <div className="overflow-hidden rounded-md shadow-2xl">
              <video
                src={IMAGES.about}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-md hover-scale shadow-2xl"
                controls
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
