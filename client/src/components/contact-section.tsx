import { CONTACT_INFO } from '@/lib/constants';
import SectionHeading from './section-heading';
import ContactForm from './contact-form';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23D4AF37\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right">
            <SectionHeading 
              title="Contact" 
              highlightedWord="Us" 
              alignment="left"
            />
            
            <div className="mb-8">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Interested in viewing the premium villa plots at Aether? Schedule a site visit or get in touch with our sales team for more information.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our experts will guide you through the available plot options and help you make the best investment decision.
              </p>
            </div>
            
            <div className="space-y-6">
              {CONTACT_INFO.map((item) => (
                <div key={item.id} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <i className={`fas fa-${item.icon} text-primary`}></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-slide-left">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
