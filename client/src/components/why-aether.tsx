import { WHY_AETHER } from '@/lib/constants';
import SectionHeading from './section-heading';

export default function WhyAether() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <SectionHeading
            title="Why"
            highlightedWord="Aether"
            alignment="center"
          />

          <p className="text-muted-foreground max-w-3xl mx-auto">
            Welcome to Aether, an exclusive BMRDA-approved gated community located near the serene Nandi Hills.
            Aether by Mythreyi offers premium villa plots set against the backdrop of picturesque foothills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
          {WHY_AETHER.map((item, index) => (
            <div
              key={item.id}
              className="bg-secondary/30 p-8 rounded-md hover-scale border-l-2 border-primary"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <i className={`fas fa-${item.icon} text-primary`}></i>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
