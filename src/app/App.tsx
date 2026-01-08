import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, MapPin, Clock, ShoppingCart, Sparkles, 
  Leaf, DollarSign, Zap, Users, Menu as MenuIcon,
  X, ChevronLeft, ChevronRight, Instagram, MessageCircle
} from "lucide-react";
import { Button } from "./components/ui/button";
import { MenuCard } from "./components/MenuCard";
import { BranchCard } from "./components/BranchCard";
import { FeatureCard } from "./components/FeatureCard";
import { TestimonialCard } from "./components/TestimonialCard";

type Language = 'en' | 'mr';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const content = {
    en: {
      nav: {
        menu: "Menu",
        branches: "Branches",
        about: "About",
        contact: "Contact"
      },
      hero: {
        title: "Fresh & Tasty Breakfast,",
        subtitle: "Made Every Morning",
        description: "Serving hygienic and delicious Indian breakfast with authentic taste.",
        viewMenu: "View Menu",
        callNow: "Call Now"
      },
      about: {
        title: "About Us",
        text: "We are a local breakfast point serving fresh, hygienic, and tasty food every day. With multiple branches, we focus on quality, consistency, and customer satisfaction."
      },
      menuSection: {
        title: "Our Menu",
        subtitle: "Delicious breakfast items made fresh every day"
      },
      menuItems: [
        "Poha",
        "Upma", 
        "Idli-Vada",
        "Misal",
        "Tea & Coffee",
        "Special Thali"
      ],
      branches: {
        title: "Our Branches",
        subtitle: "Visit our nearby branch for fresh breakfast every morning."
      },
      features: {
        title: "Why Choose Us",
        items: [
          "Fresh Ingredients",
          "Hygienic Kitchen",
          "Affordable Prices",
          "Quick Service",
          "Bulk Orders Available"
        ]
      },
      timings: {
        title: "Timings & Orders",
        hours: "Open Daily: 7:00 AM – 12:00 PM",
        bulk: "Bulk orders available for offices & events.",
        call: "Call Now",
        whatsapp: "WhatsApp Order"
      },
      testimonials: {
        title: "What Our Customers Say",
        items: [
          {
            name: "Rajesh Patil",
            text: "Best breakfast place in the area! Fresh and tasty food every time.",
            rating: 5
          },
          {
            name: "Sunita Deshmukh",
            text: "Great quality and very hygienic. My family's favorite breakfast spot.",
            rating: 5
          },
          {
            name: "Amit Sharma",
            text: "Quick service and reasonable prices. Perfect for office breakfast orders!",
            rating: 5
          }
        ]
      },
      contact: {
        title: "Contact Us",
        phone: "Phone",
        whatsapp: "WhatsApp",
        location: "Location"
      },
      footer: {
        tagline: "Fresh Taste. Everyday."
      }
    },
    mr: {
      nav: {
        menu: "मेनू",
        branches: "शाखा",
        about: "आमच्याबद्दल",
        contact: "संपर्क"
      },
      hero: {
        title: "दररोज ताज्या आणि",
        subtitle: "चविष्ट नाश्त्याची हमी",
        description: "स्वच्छ आणि स्वादिष्ट घरगुती नाश्ता",
        viewMenu: "मेनू पाहा",
        callNow: "आत्ता कॉल करा"
      },
      about: {
        title: "आमच्याबद्दल",
        text: "आम्ही दररोज ताजे, स्वच्छ आणि चविष्ट नाश्ता देतो. आमच्या अनेक शाखांद्वारे गुणवत्तेची खात्री देतो."
      },
      menuSection: {
        title: "आमचा मेनू",
        subtitle: "दररोज ताजे बनवलेले स्वादिष्ट नाश्याचे पदार्थ"
      },
      menuItems: [
        "पोहे",
        "उपमा",
        "इडली-वडा",
        "मिसळ",
        "चहा-कॉफी",
        "स्पेशल थाळी"
      ],
      branches: {
        title: "आमच्या शाखा",
        subtitle: "तुमच्या जवळच्या शाखेत ताज्या नाश्त्यासाठी भेट द्या."
      },
      features: {
        title: "आम्हाला का निवडावे",
        items: [
          "ताजे साहित्य",
          "स्वच्छ स्वयंपाकघर",
          "परवडणारी किंमत",
          "जलद सेवा",
          "मोठ्या ऑर्डरसाठी उपलब्ध"
        ]
      },
      timings: {
        title: "वेळ आणि ऑर्डर",
        hours: "दररोज उघडे: सकाळी ७ ते दुपारी १२",
        bulk: "ऑफिस व कार्यक्रमांसाठी ऑर्डर उपलब्ध",
        call: "कॉल करा",
        whatsapp: "व्हॉट्सअ‍ॅप ऑर्डर"
      },
      testimonials: {
        title: "ग्राहकांचे अनुभव",
        items: [
          {
            name: "राजेश पाटील",
            text: "परिसरातील सर्वोत्तम नाश्त्याचे ठिकाण! दरवेळी ताजे आणि चविष्ट जेवण.",
            rating: 5
          },
          {
            name: "सुनिता देशमुख",
            text: "उत्तम दर्जा आणि अतिशय स्वच्छ. माझ्या कुटुंबाचे आवडते नाश्त्याचे ठिकाण.",
            rating: 5
          },
          {
            name: "अमित शर्मा",
            text: "जलद सेवा आणि वाजवी किंमती. ऑफिसच्या नाश्त्याच्या ऑर्डरसाठी योग्य!",
            rating: 5
          }
        ]
      },
      contact: {
        title: "संपर्क साधा",
        phone: "फोन",
        whatsapp: "व्हॉट्सअ‍ॅप",
        location: "पत्ता"
      },
      footer: {
        tagline: "दररोज ताजेपणा आणि चव"
      }
    }
  };

  const t = content[language];

  const menuImages = [
    "https://images.unsplash.com/photo-1644289450169-bc58aa16bacb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2hhJTIwaW5kaWFuJTIwYnJlYWtmYXN0fGVufDF8fHx8MTc2Nzg4NDMwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1644289450169-bc58aa16bacb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cG1hJTIwYnJlYWtmYXN0JTIwaW5kaWFufGVufDF8fHx8MTc2Nzg4NDMwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1730191843435-073792ba22bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZGxpJTIwdmFkYSUyMHNvdXRoJTIwaW5kaWFufGVufDF8fHx8MTc2Nzg4NDMwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1702799464926-b5fb08efe25d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXNhbCUyMHBhdiUyMG1haGFyYXNodHJhfGVufDF8fHx8MTc2Nzg4NDMwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1609670438772-9cf3afc5052b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZWElMjBjaGFpfGVufDF8fHx8MTc2Nzg2NTUyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1676700310660-e92d03e259c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmVha2Zhc3QlMjBmb29kfGVufDF8fHx8MTc2Nzg4NDI5OXww&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  const branches = [
    { name: "Shivaji Nagar Branch", location: "Shop No. 5, Shivaji Nagar, Pune - 411005", phone: "+91 98765 43210" },
    { name: "Kothrud Branch", location: "Near Bus Stand, Kothrud, Pune - 411038", phone: "+91 98765 43211" },
    { name: "Hadapsar Branch", location: "Market Yard, Hadapsar, Pune - 411028", phone: "+91 98765 43212" }
  ];

  const features = [
    { icon: Leaf, title: t.features.items[0] },
    { icon: Sparkles, title: t.features.items[1] },
    { icon: DollarSign, title: t.features.items[2] },
    { icon: Zap, title: t.features.items[3] },
    { icon: ShoppingCart, title: t.features.items[4] }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % t.testimonials.items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [t.testimonials.items.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'mr' : 'en');
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="text-xl text-orange-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              🍳 Nasta Point
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-orange-600 transition-colors">
                {t.nav.menu}
              </button>
              <button onClick={() => scrollToSection('branches')} className="text-gray-700 hover:text-orange-600 transition-colors">
                {t.nav.branches}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors">
                {t.nav.contact}
              </button>
              
              {/* Language Toggle */}
              <motion.div 
                className="flex items-center gap-1 bg-gray-100 rounded-full p-1"
                whileHover={{ scale: 1.05 }}
              >
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    language === 'en' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('mr')}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    language === 'mr' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  मराठी
                </button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm"
              >
                {language === 'en' ? 'मराठी' : 'EN'}
              </button>
              <button 
                className="text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden py-4 border-t border-gray-200"
              >
                <div className="flex flex-col gap-4">
                  <button onClick={() => scrollToSection('menu')} className="text-left text-gray-700 hover:text-orange-600 transition-colors">
                    {t.nav.menu}
                  </button>
                  <button onClick={() => scrollToSection('branches')} className="text-left text-gray-700 hover:text-orange-600 transition-colors">
                    {t.nav.branches}
                  </button>
                  <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-orange-600 transition-colors">
                    {t.nav.about}
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-orange-600 transition-colors">
                    {t.nav.contact}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-green-50 -z-10">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1676700310660-e92d03e259c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmVha2Zhc3QlMjBmb29kfGVufDF8fHx8MTc2Nzg4NDI5OXww&ixlib=rb-4.1.0&q=80&w=1080")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>
        
        {/* Floating Food Icons */}
        <motion.div
          className="absolute top-20 left-10 text-6xl"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🥘
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-6xl"
          animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          ☕
        </motion.div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={language}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1 
                  className="text-5xl md:text-7xl mb-4 text-gray-900"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {t.hero.title}
                  <br />
                  <span className="text-orange-600">{t.hero.subtitle}</span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl md:text-2xl text-gray-700 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {t.hero.description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('menu')}
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 shadow-lg text-lg px-8"
                >
                  <Users className="w-5 h-5 mr-2" />
                  {t.hero.viewMenu}
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8"
                  onClick={() => window.location.href = 'tel:+919876543210'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t.hero.callNow}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={language + '-about'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl mb-8 text-center text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {t.about.title}
              </motion.h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full mb-12"></div>
              
              <motion.div 
                className="max-w-3xl mx-auto bg-gradient-to-br from-orange-50 to-yellow-50 p-8 md:p-12 rounded-3xl shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                  {t.about.text}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={language + '-menu'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl mb-4 text-center text-gray-900">
                {t.menuSection.title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-600 text-center mb-12 text-lg">
                {t.menuSection.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.menuItems.map((item, index) => (
              <MenuCard 
                key={index}
                name={item}
                image={menuImages[index]}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={language + '-branches'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl mb-4 text-center text-gray-900">
                {t.branches.title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-600 text-center mb-12 text-lg">
                {t.branches.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <BranchCard key={index} {...branch} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={language + '-features'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl mb-12 text-center text-gray-900">
                {t.features.title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full mb-12"></div>
            </motion.div>
          </AnimatePresence>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Timings & Orders Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={language + '-timings'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl mb-12 text-gray-900">
                {t.timings.title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full mb-12"></div>
              
              <div className="max-w-2xl mx-auto mb-8">
                <motion.div 
                  className="flex items-center justify-center gap-4 mb-6 text-2xl text-gray-800"
                  whileHover={{ scale: 1.05 }}
                >
                  <Clock className="w-8 h-8 text-orange-600" />
                  <p>{t.timings.hours}</p>
                </motion.div>
                
                <p className="text-lg text-gray-700 mb-8">
                  {t.timings.bulk}
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-lg px-8"
                      onClick={() => window.location.href = 'tel:+919876543210'}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      {t.timings.call}
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-lg px-8"
                      onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {t.timings.whatsapp}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={language + '-testimonials-title'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl mb-12 text-center text-gray-900">
                {t.testimonials.title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full mb-12"></div>
            </motion.div>
          </AnimatePresence>
          
          <div className="relative">
            <TestimonialCard {...t.testimonials.items[currentTestimonial]} />
            
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + t.testimonials.items.length) % t.testimonials.items.length)}
                className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % t.testimonials.items.length)}
                className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={language + '-contact'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl mb-12 text-center text-gray-900">
                {t.contact.title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full mb-12"></div>
              
              <div className="max-w-3xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div 
                    className="flex flex-col items-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl shadow-lg"
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-gray-700 mb-2">{t.contact.phone}</p>
                    <a href="tel:+919876543210" className="text-orange-600 hover:text-orange-800 transition-colors">
                      +91 98765 43210
                    </a>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col items-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg"
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mb-4">
                      <MessageCircle className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-gray-700 mb-2">{t.contact.whatsapp}</p>
                    <a 
                      href="https://wa.me/919876543210" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg"
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-gray-700 mb-2">{t.contact.location}</p>
                    <p className="text-blue-600 text-center">Pune, India</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={language + '-footer'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-2xl mb-4">{t.footer.tagline}</p>
              <div className="flex justify-center gap-6 mb-4">
                <motion.a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="hover:text-pink-200 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="https://wa.me/919876543210" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  className="hover:text-green-200 transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="https://maps.google.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="hover:text-blue-200 transition-colors"
                >
                  <MapPin className="w-6 h-6" />
                </motion.a>
              </div>
              <p className="text-sm text-white/80">© 2026 Nasta Point. All rights reserved.</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </footer>
    </div>
  );
}
