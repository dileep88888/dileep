import { motion } from "motion/react";
import { Phone, MapPin, Clock, Star, ChevronRight, Factory, Scissors, Shirt } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-ink/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-2xl font-serif font-bold tracking-tight">DNO1GARMENT</div>
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
        <a href="#about" className="hover:text-brand-olive transition-colors">About</a>
        <a href="#services" className="hover:text-brand-olive transition-colors">Services</a>
        <a href="#contact" className="hover:text-brand-olive transition-colors">Contact</a>
      </div>
      <a 
        href="tel:03122027350"
        className="bg-brand-ink text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest hover:bg-brand-olive transition-all"
      >
        Call Now
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1558600090-f73f7091756d?q=80&w=2000&auto=format&fit=crop" 
        alt="Fabric texture" 
        className="w-full h-full object-cover opacity-20"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/0 via-brand-cream/50 to-brand-cream" />
    </div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <div className="flex text-yellow-600">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <span className="text-sm font-medium tracking-widest uppercase opacity-60">5.0 Google Review</span>
        </div>
        <h1 className="text-7xl md:text-8xl leading-[0.9] mb-8">
          Crafting <br />
          <span className="italic">Excellence</span> <br />
          in Every Thread.
        </h1>
        <p className="text-xl text-brand-ink/70 max-w-md mb-10 leading-relaxed">
          Premium clothes and fabric manufacturer based in Tando Ghulām Ali. We bring tradition and quality to modern textile production.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="bg-brand-olive text-white px-8 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
            Get a Quote <ChevronRight size={18} />
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl"
      >
        <img 
          src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop" 
          alt="Garment manufacturing" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <span className="text-brand-olive font-medium uppercase tracking-[0.2em] text-sm mb-4 block">Our Heritage</span>
          <h2 className="text-5xl md:text-6xl mb-8">Decades of craftsmanship in the heart of Tando Ghulām Ali.</h2>
          <div className="grid md:grid-cols-2 gap-8 text-brand-ink/70 leading-relaxed">
            <p>
              Dno1garment stands as a pillar of quality in the textile industry. Our facility in Tando Ghulām Ali combines traditional weaving techniques with modern manufacturing standards to produce fabrics that are both durable and beautiful.
            </p>
            <p>
              From raw material selection to the final stitch, our process is defined by meticulous attention to detail. We serve both local and international markets, providing bespoke solutions for garment brands and fabric retailers.
            </p>
          </div>
        </div>
        <div className="bg-brand-cream p-12 rounded-[32px] flex flex-col justify-center border border-brand-ink/5">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-olive/10 flex items-center justify-center text-brand-olive">
                <Factory size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-1">Modern Facility</h4>
                <p className="text-sm opacity-70">State-of-the-art machinery for precision manufacturing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-olive/10 flex items-center justify-center text-brand-olive">
                <Scissors size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-1">Custom Tailoring</h4>
                <p className="text-sm opacity-70">Bespoke garment production tailored to your specs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-olive/10 flex items-center justify-center text-brand-olive">
                <Shirt size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-1">Premium Fabrics</h4>
                <p className="text-sm opacity-70">Sourcing the finest raw materials for superior feel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Fabric Manufacturing",
      desc: "High-quality cotton, silk, and blended fabrics produced in-house.",
      img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Garment Production",
      desc: "Bulk manufacturing for fashion brands and corporate uniforms.",
      img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Textile Sourcing",
      desc: "Expert consultation and sourcing for specialized textile needs.",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-olive font-medium uppercase tracking-[0.2em] text-sm mb-4 block">What We Do</span>
          <h2 className="text-5xl md:text-6xl">Our Specialized Services</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] rounded-[32px] overflow-hidden mb-6 relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-ink/20 group-hover:bg-transparent transition-colors" />
              </div>
              <h3 className="text-2xl mb-2">{service.title}</h3>
              <p className="text-brand-ink/60">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-32 bg-brand-ink text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-24">
        <div>
          <h2 className="text-6xl mb-12">Let's create <br /><span className="italic text-brand-cream/50">together.</span></h2>
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest opacity-50 mb-1">Call Us</p>
                <a href="tel:03122027350" className="text-2xl hover:text-brand-cream/70 transition-colors">0312 2027350</a>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest opacity-50 mb-1">Visit Us</p>
                <p className="text-2xl">Tando Ghulām Ali, 75200</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest opacity-50 mb-1">Business Hours</p>
                <p className="text-2xl">Opens 9:00 AM Wed</p>
                <p className="text-sm opacity-50 mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 p-12 rounded-[40px] border border-white/10">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest opacity-50">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest opacity-50">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-50">Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors resize-none" />
            </div>
            <button className="w-full bg-brand-cream text-brand-ink py-4 rounded-full uppercase tracking-widest font-bold hover:bg-white transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-brand-ink/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-xl font-serif font-bold">DNO1GARMENT</div>
      <p className="text-sm opacity-50">© 2026 Dno1garment. All rights reserved.</p>
      <div className="flex gap-8 text-xs uppercase tracking-widest font-medium opacity-60">
        <a href="#" className="hover:opacity-100">Privacy</a>
        <a href="#" className="hover:opacity-100">Terms</a>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="selection:bg-brand-olive selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
