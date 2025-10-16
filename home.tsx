import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { LegalModal } from "@/components/ui/legal-modal";
import Logo from "@/components/ui/logo";
import studioImage from '@assets/studio_storefront.webp';
import studioExterior from '@assets/studio_exterior.webp';
import studioInterior from '@assets/studio_interior.webp';
import heroLogo from '@assets/da_vinci_logo_transparent.webp';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Building, 
  Instagram,
  ArrowRight,
  Clock
} from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [legalModal, setLegalModal] = useState<{
    isOpen: boolean;
    type: "kopvillkor" | "angerratt" | null;
  }>({ isOpen: false, type: null });

  useEffect(() => {
    setIsVisible(true);
    
    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const openLegalModal = (type: "kopvillkor" | "angerratt") => {
    setLegalModal({ isOpen: true, type });
  };

  const closeLegalModal = () => {
    setLegalModal({ isOpen: false, type: null });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-luxury-gold/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Logo size="md" className="transform hover:scale-105 transition-transform duration-300" />
              <div className="font-serif text-3xl font-bold luxury-gold tracking-wide">
                Da Vinci Ink Studio
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="tel:+46769109440" 
                className="hidden md:flex items-center space-x-2 text-black hover:text-luxury-gold transition-colors duration-300 bg-luxury-gold/10 hover:bg-luxury-gold/20 px-4 py-2 rounded-full border border-luxury-gold/30"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">076-910 94 40</span>
              </a>
              <a 
                href="tel:+46769109440" 
                className="md:hidden text-black hover:text-luxury-gold transition-colors duration-300"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-black"></div>
        
        <div 
          className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Hero Logo - Large and Prominent */}
          <div className="mb-8 flex justify-center">
            <img 
              src={heroLogo} 
              alt="Da Vinci Ink Sweden logo" 
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
              style={{
                filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
                imageRendering: 'auto'
              }}
              onLoad={() => console.log('Hero logo loaded successfully')}
              onError={(e) => console.error('Failed to load hero logo:', e)}
            />
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold luxury-gold mb-8 text-shadow-gold">
            Da Vinci Ink
          </h1>
          <div className="w-32 h-px luxury-gradient mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide mb-12 text-gray-200">
            Luxury tattoos, crafted with precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              asChild
              className="group bg-white hover:bg-gray-100 text-black px-8 py-4 font-semibold text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              <a href="tel:+46769109440">
                <span className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>CALL NOW</span>
                </span>
              </a>
            </Button>
            
            <Button 
              asChild
              className="group bg-white hover:bg-gray-100 text-black px-8 py-4 font-semibold text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              <a href="https://www.instagram.com/davinci.ink_studio/?hl=en" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center space-x-2">
                  <Instagram className="h-5 w-5" />
                  <span>FOLLOW US</span>
                </span>
              </a>
            </Button>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 deep-black scroll-animate opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold luxury-gold mb-8">
            Luxury Tattoo Experience
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              At Da Vinci Ink, we specialize in creating custom tattoo masterpieces that reflect your unique story. 
              From intricate black and grey realism to bold traditional designs, our artists bring years of experience 
              and passion to every piece of skin art.
            </p>
            <p>
              We use only the highest quality inks, sterile equipment, and maintain the strictest hygiene standards. 
              Every tattoo session is a collaborative journey where your vision meets our artistic expertise to create 
              something truly exceptional.
            </p>
          </div>
          
          {/* Studio Images */}
          <div className="mt-12 mb-12 grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <div className="flex justify-center">
              <img 
                src={studioImage} 
                alt="Da Vinci Ink Studio storefront with purple neon lighting at night" 
                className="w-full rounded-lg shadow-2xl shadow-luxury-gold/30 border-2 border-luxury-gold/50 opacity-100"
                style={{ display: 'block' }}
                onLoad={() => console.log('Studio night image loaded successfully')}
                onError={(e) => console.error('Failed to load studio night image:', e)}
              />
            </div>
            <div className="flex justify-center">
              <img 
                src={studioExterior} 
                alt="Da Vinci Ink Studio exterior view during daytime showing the building entrance" 
                className="w-full rounded-lg shadow-2xl shadow-luxury-gold/30 border-2 border-luxury-gold/50 opacity-100"
                style={{ display: 'block' }}
                onLoad={() => console.log('Studio exterior image loaded successfully')}
                onError={(e) => console.error('Failed to load studio exterior image:', e)}
              />
            </div>
            <div className="flex justify-center">
              <img 
                src={studioInterior} 
                alt="Da Vinci Ink Studio interior showing tattoo chairs and purple ambient lighting" 
                className="w-full rounded-lg shadow-2xl shadow-luxury-gold/30 border-2 border-luxury-gold/50 opacity-100"
                style={{ display: 'block' }}
                onLoad={() => console.log('Studio interior image loaded successfully')}
                onError={(e) => console.error('Failed to load studio interior image:', e)}
              />
            </div>
          </div>
          
          <div className="flex justify-center items-center space-x-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold luxury-gold">5+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold luxury-gold">500+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Tattoos Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold luxury-gold">100%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-20 deep-black scroll-animate opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold luxury-gold mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to create your masterpiece? Get in touch to schedule your consultation
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <Card className="charcoal border-luxury-gold/20">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold luxury-gold mb-6">Studio Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="luxury-gold text-xl mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1 text-white">Address</h4>
                        <p className="dark-gold">Guldmyntsgatan 38<br />414 81 Göteborg</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="luxury-gold text-xl mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1 text-white">Phone</h4>
                        <a 
                          href="tel:+46769109440" 
                          className="dark-gold hover:text-luxury-gold transition-colors"
                        >
                          076-910 94 40
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="luxury-gold text-xl mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1 text-white">Email</h4>
                        <a 
                          href="mailto:armanjamal@hotmail.com" 
                          className="dark-gold hover:text-luxury-gold transition-colors"
                        >
                          armanjamal@hotmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Building className="luxury-gold text-xl mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1 text-white">Organization Number</h4>
                        <p className="dark-gold">559223-8215</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="charcoal border-luxury-gold/20">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold luxury-gold mb-6">Studio Hours</h3>
                  <div className="space-y-3 text-dark-gold">
                    <div className="flex justify-between items-center">
                      <span>Monday - Sunday</span>
                      <span className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>11:00 - 20:00</span>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-luxury-gold/30 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Studio Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Logo size="sm" />
                <div className="font-serif text-2xl font-bold text-black">Da Vinci Ink</div>
              </div>
              <p className="text-black/70 text-sm">Luxury tattoos, crafted with precision.</p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-black mb-4">Kontakt</h3>
              <div className="space-y-2 text-black/80 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-luxury-gold flex-shrink-0" />
                  <span>Guldmyntsgatan 38<br />414 81 Göteborg</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-luxury-gold flex-shrink-0" />
                  <a href="tel:0769109440" className="hover:text-luxury-gold transition-colors">
                    076-910 94 40
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-luxury-gold flex-shrink-0" />
                  <a href="mailto:armanjamal@hotmail.com" className="hover:text-luxury-gold transition-colors">
                    armanjamal@hotmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="h-4 w-4 text-luxury-gold flex-shrink-0" />
                  <span>Org.nr: 559223-8215</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-black mb-4">Följ oss</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/davinci.ink_studio/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-luxury-gold hover:text-black text-2xl transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-black mb-4">Juridiskt</h3>
              <div className="space-y-2">
                <button
                  onClick={() => openLegalModal("kopvillkor")}
                  className="block text-black/80 hover:text-luxury-gold transition-colors text-sm cursor-pointer"
                >
                  Köpvillkor
                </button>
                <button
                  onClick={() => openLegalModal("angerratt")}
                  className="block text-black/80 hover:text-luxury-gold transition-colors text-sm cursor-pointer"
                >
                  Ångerrätt
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-luxury-gold/30 mt-8 pt-8 text-center text-black/60 text-sm">
            <p>&copy; 2024 Da Vinci Ink. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {legalModal.type && (
        <LegalModal
          isOpen={legalModal.isOpen}
          onClose={closeLegalModal}
          type={legalModal.type}
        />
      )}


    </div>
  );
}
