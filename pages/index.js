import { useState, useEffect } from 'react';
import Image from 'next/image';
import SEO from '../components/SEO';

export default function Portfolio() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [activeSection, setActiveSection] = useState('hero');
  const [showNavigation, setShowNavigation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setActiveSection(sectionId);
  };

  // Show navigation after scrolling past hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      setShowNavigation(scrollY > heroHeight * 0.3);

      // Update active section based on scroll position
      const sections = ['hero', 'bio', 'pokemon', 'wbgames', 'travel', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'hero', label: 'Home' },
    { id: 'bio', label: 'Bio' },
    { id: 'pokemon', label: 'Pokémon' },
    { id: 'wbgames', label: 'WB Games' },
    { id: 'travel', label: 'Travel' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="bg-[#c8a882] min-h-screen">
      <SEO title="Niamh Hawthorne - Portfolio" description="Freelance Producer specializing in video production, Pokémon TCG, and travel content" />
      
      {/* Floating Navigation */}
      {showNavigation && (
        <nav className="fixed top-8 right-8 z-50 bg-[#8b7355]/90 backdrop-blur-md rounded-full p-2 shadow-lg transition-all duration-300">
          <div className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-12 h-12 rounded-full transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-[#e8d5c4] text-[#8b7355] scale-110'
                    : 'bg-transparent text-[#e8d5c4] hover:bg-[#e8d5c4]/20'
                }`}
                title={item.label}
              >
                <span className="text-xs font-semibold">
                  {item.id === 'hero' ? '🏠' : 
                   item.id === 'bio' ? '👤' :
                   item.id === 'pokemon' ? '🎮' :
                   item.id === 'wbgames' ? '🎬' :
                   item.id === 'travel' ? '✈️' : '📧'}
                </span>
              </button>
            ))}
          </div>
        </nav>
      )}
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-8">
        <div className="mb-16">
        <button 
              onClick={() => scrollToSection('pokemon')}
              className="text-[#a08969] text-sm font-semibold tracking-widest uppercase mb-8 transition-colors cursor-pointer"
            >
              PORTFOLIO
            </button>
          
          <h1 className="text-[#8b7355] text-6xl md:text-8xl font-light mb-16 leading-tight">
            Niamh<br />
            Hawthorne
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center items-center">
            <button 
              onClick={() => scrollToSection('bio')}
              className="text-[#a08969] text-sm font-semibold tracking-widest uppercase hover:text-[#8b7355] transition-colors cursor-pointer"
            >
              VIDEO PRODUCER
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#a08969] text-sm font-semibold tracking-widest uppercase hover:text-[#8b7355] transition-colors cursor-pointer"
            >
              EMAIL ME
            </button>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="min-h-screen bg-[#e8d5c4] flex items-center">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <h2 className="text-[#8b7355] text-4xl md:text-5xl font-light mb-16 text-center">
            Freelance Producer Bio
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-[#4a4a4a] rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                  <p className="text-white text-center">Workspace Image Placeholder</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <p className="text-[#8b7355] text-lg leading-relaxed">
                I have previously worked to produce localised ads for a myriad of companies, where I oversaw the post-production from start to international delivery for a variety of digital platforms.
              </p>
              
              <p className="text-[#8b7355] text-lg leading-relaxed">
                I also specialising in directing voiceovers for multiple language for the localisation of international ads, which I have continued while freelancing.
              </p>
              
              <p className="text-[#8b7355] text-lg leading-relaxed">
                Recently, I have also been working on travel-based social media content, to help improve my understanding of social media analytics, filming, and editing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pokémon TCG Portfolio */}
      <section id="pokemon" className="min-h-screen bg-[#c8a882] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-[#8b7355] text-4xl md:text-5xl font-light mb-16 text-center">
            Pokémon TCG - Portfolio
          </h2>
          
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <p className="text-[#8b7355] text-lg leading-relaxed mb-6">
              I worked with Pokémon TCG on a variety of projects to localise the global content for multiple territories, with distribution on META, TikTok, YouTube, Spotify, TV, and Cinema.
            </p>
            <p className="text-[#8b7355] text-lg leading-relaxed">
              I was responsible for the adverts from start to finish and directed the voiceovers to fit the brief of each project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg overflow-hidden shadow-lg aspect-video">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-white text-center font-semibold">Pokémon TCG Project {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WB Games Portfolio */}
      <section id="wbgames" className="min-h-screen bg-[#e8d5c4] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-[#8b7355] text-4xl md:text-5xl font-light mb-16 text-center">
            WB Games - Portfolio
          </h2>
          
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <p className="text-[#8b7355] text-lg leading-relaxed">
              I worked with WB Games to localise a variety of different adverts across multiple territories with distribution on META, TikTok, YouTube, TV and Cinema.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} className="bg-gradient-to-br from-red-600 to-orange-700 rounded-lg overflow-hidden shadow-lg aspect-video">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-white text-center font-semibold">WB Games Project {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Travel Content */}
      <section id="travel" className="min-h-screen bg-[#c8a882] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-[#8b7355] text-4xl md:text-5xl font-light mb-16 text-center">
            Social Media Travel Content
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-[#8b7355] text-lg leading-relaxed">
                Recently, I have been using my camera skills to create more travel-focused videos for social media platforms. This has helped me to improve my script writing, filming, and editing.
              </p>
              <p className="text-[#8b7355] text-lg leading-relaxed">
                The cameras I have been using to capture this content are the iPhone 15 Pro Max, GoPro Hero12 and the Nikon Zfc/Smart CrossFit's Osmo Pocket 3.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-lg overflow-hidden shadow-lg aspect-[3/4]">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-white text-center font-semibold">Travel Content 1</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-600 to-green-600 rounded-lg overflow-hidden shadow-lg aspect-[3/4]">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-white text-center font-semibold">Travel Content 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-[#e8d5c4] flex items-center">
        <div className="max-w-4xl mx-auto px-8 py-16 w-full">
          <h2 className="text-[#8b7355] text-4xl md:text-5xl font-light mb-16 text-center">
            Contact me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-[#d4c1a8] text-[#8b7355] placeholder-[#a08969] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#8b7355]"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-[#d4c1a8] text-[#8b7355] placeholder-[#a08969] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#8b7355]"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-[#d4c1a8] text-[#8b7355] placeholder-[#a08969] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#8b7355] resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-[#8b7355] text-[#e8d5c4] rounded-lg font-semibold tracking-wide hover:bg-[#7a6349] transition-colors"
              >
                Send Message
              </button>
            </form>
            
            <div className="lg:pl-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-[#8b7355] text-lg font-semibold mb-2">Contact</h3>
                  <p className="text-[#8b7355]">niamhhawthorne@gmail.com</p>
                </div>
                
                <div>
                  <h3 className="text-[#8b7355] text-lg font-semibold mb-2">Currently</h3>
                  <p className="text-[#8b7355]">based in London</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
