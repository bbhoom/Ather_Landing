import { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-playfair font-bold text-white mb-6">
              <span className="text-primary">AETHER</span> by Mythreyi
            </h3>
            <p className="text-muted-foreground mb-6">
              Premium BMRDA-approved villa plots near Nandi Hills, offering the perfect canvas for your dream home.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-colors duration-300"
                  aria-label={social.id}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-semibold text-white mb-6">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-semibold text-white mb-6">Contact Information</h4>
            <ul className="space-y-4">
              {FOOTER_CONTACT_INFO.map((item) => (
                <li key={item.id} className="flex items-start">
                  <i className={`fas fa-${item.icon} text-primary mt-1 mr-3`}></i>
                  <span className="text-muted-foreground">{item.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} Aether by Mythreyi. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Privacy Policy</Link>
            {/* <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Privacy Policy</a> */}
            <p className="text-muted-foreground text-sm">
              Designed by <a href="https://www.launchdaddy.in/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">steadee Ventures</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
