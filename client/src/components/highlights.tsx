import { HIGHLIGHTS } from '@/lib/constants';

export default function Highlights() {
  return (
    <section id="highlights" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {HIGHLIGHTS.map((highlight, index) => (
            <div 
              key={highlight.id}
              className="flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <i className={`fas fa-${highlight.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-primary mb-3">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
