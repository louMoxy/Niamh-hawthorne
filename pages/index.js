import { useState, useEffect } from 'react';
import Image from 'next/image';
import SEO from '../components/SEO';
import { House, CircleUser, GalleryVerticalEnd, Plane, Mail, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  // Pokémon TCG Projects Array
  const pokemonProjects = [
    {
      title: "Pokémon TCG: Scarlet & Violet",
      imageSrc: "/images/pokemon-1.png",
      youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      title: "Scarlett and Violet Obsidian Flames",
      imageSrc: "/images/pokemon-2.png",
      youtubeLink: "https://www.youtube.com/watch?v=4EDW4aCZYAQ "
    },
    {
      title: "",
      imageSrc: "/images/pokemon-3.png",
    },
    {
      title: "Scarlett and Violet Paradox Rift",
      imageSrc: "/images/pokemon-4.png",
      youtubeLink: "https://www.youtube.com/watch?v=zn5ojMYJ8SQ"
    },
    {
      title: "",
      imageSrc: "/images/pokemon-5.png",
    },
    {
      title: "Pokémon TCG: Scarlet Violet — Paldea Evolved",
      imageSrc: "/images/pokemon-6.png",
      youtubeLink: "https://youtu.be/sBh3RzQGMwM"
    },
    {
      title: "",
      imageSrc: "/images/pokemon-7.png",
    },
    {
      title: "Stella Crown",
      imageSrc: "/images/pokemon-8.png",
      youtubeLink: "https://youtu.be/53nld1z7Da4"
    }
  ];

  // WB Games Projects Array
  const wbGamesProjects = [
    {
      title: "Hogwarts Legacy UK trailer",
      imageSrc: "/images/hog1.png",
      youtubeLink: "https://www.youtube.com/watch?v=Myuuq5gRV2g"
    },
    {
      title: "Hogwarts Legacy Spanish trailer",
      imageSrc: "/images/hog2.png",
      youtubeLink: "https://www.youtube.com/watch?v=S6GTl_vPRvU"
    },
    {
      title: "Hogwarts Legacy German trailer",
      imageSrc: "/images/hog3.png",
      youtubeLink: "https://www.youtube.com/watch?v=L_E9soBduT0"
    },
    {
      title: "Multiversus German trailer",
      imageSrc: "/images/trailer2.png",
      youtubeLink: "https://www.youtube.com/watch?v=HWSmZobeDDk"
    },
    {
      title: "Multiversus UK trailer",
      imageSrc: "/images/multi.png",
      youtubeLink: "https://www.youtube.com/watch?v=DSsRonuSTx4 "
    },
    {
      title: "Suicide Squad German trailer",
      imageSrc: "/images/sucidide.png",
      youtubeLink: "https://www.youtube.com/watch?v=4KIp9346AcQ"
    },
    {
      title: "Suicide Squad French trailer",
      imageSrc: "/images/trailer3.png",
      youtubeLink: "https://www.youtube.com/watch?v=a8o2kxIEsAI"
    },
    {
      title: "Mortal Kombat UK trailer",
      imageSrc: "/images/mortal.png",
      youtubeLink: "https://www.youtube.com/watch?v=lBYvt1_t6Q4"
    },
    {
      title: "Gotham Knights UK trailer ",
      imageSrc: "/images/goth-2.png",
      youtubeLink: "https://www.youtube.com/watch?v=Qc_OK0I3IXM "
    },
    {
      title: "Gotham Knights Spanish trailer ",
      imageSrc: "/images/goth-1.png",
      youtubeLink: "https://www.youtube.com/watch?v=dT4PMb5DbRo"
    },
    {
      title: "Back 4 Blood UK trailer",
      imageSrc: "/images/Back4blood-1.png",
      youtubeLink: "https://www.youtube.com/watch?v=LPhrgem_-bQ"
    }
  ];

  const [activeSection, setActiveSection] = useState('hero');
  const [showNavigation, setShowNavigation] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => {
        alert("Thank you for your message! I'll get back to you soon.");
        // Reset form
        e.target.reset();
        setFormData({ fullName: '', email: '', message: '' });
      })
      .catch(error => {
        console.error('Error:', error);
        alert("There was an error sending your message. Please try again.");
      });
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
    { id: 'travel', label: 'Travel' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="bg-[#ad8b63] min-h-screen">
      <SEO title="Niamh Hawthorne - Portfolio" description="Freelance Producer specializing in video production, Pokémon TCG, and travel content" />
      
             {/* Floating Navigation */}
       {showNavigation && (
         <>
           {/* Desktop Navigation */}
           <nav className="fixed top-8 right-8 z-50 hidden md:block bg-[#8b7355]/90 backdrop-blur-md rounded-full p-2 shadow-lg transition-all duration-300">
             <div className="flex flex-col gap-2">
               {navigationItems.map((item) => (
                 <button
                   key={item.id}
                   onClick={() => scrollToSection(item.id)}
                   className={`w-12 h-12 p-3 rounded-full transition-all duration-200 ${
                     activeSection === item.id
                       ? 'bg-[#e8d5c4] text-[#8b7355] scale-110'
                       : 'bg-transparent text-[#e8d5c4] hover:bg-[#e8d5c4]/20'
                   }`}
                   title={item.label}
                 >
                   {item.id === 'hero' ? <House size={24} /> : 
                   item.id === 'bio' ? <CircleUser size={24} /> :
                   item.id === 'pokemon' ? <GalleryVerticalEnd size={24} /> :
                   item.id === 'travel' ? <Plane size={24} /> : <Mail size={24} />}
                 </button>
               ))}
             </div>
           </nav>

           {/* Mobile Menu Button */}
           <button
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             className="fixed top-8 right-8 z-50 md:hidden w-12 h-12 bg-[#8b7355]/90 backdrop-blur-md rounded-full p-3 shadow-lg transition-all duration-300 hover:bg-[#8b7355]"
           >
             {mobileMenuOpen ? <X size={24} className="text-[#e8d5c4]" /> : <Menu size={24} className="text-[#e8d5c4]" />}
           </button>

           {/* Mobile Navigation Menu */}
           {mobileMenuOpen && (
             <nav className="fixed top-20 right-8 z-40 md:hidden bg-[#8b7355]/95 backdrop-blur-md rounded-2xl p-4 shadow-lg transition-all duration-300">
               <div className="flex flex-col gap-3">
                 {navigationItems.map((item) => (
                   <button
                     key={item.id}
                     onClick={() => {
                       scrollToSection(item.id);
                       setMobileMenuOpen(false);
                     }}
                     className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                       activeSection === item.id
                         ? 'bg-[#e8d5c4] text-[#8b7355]'
                         : 'bg-transparent text-[#e8d5c4] hover:bg-[#e8d5c4]/20'
                     }`}
                   >
                     {item.id === 'hero' ? <House size={20} /> : 
                     item.id === 'bio' ? <CircleUser size={20} /> :
                     item.id === 'pokemon' ? <GalleryVerticalEnd size={20} /> :
                     item.id === 'travel' ? <Plane size={20} /> : <Mail size={20} />}
                     <span className="text-sm font-medium">{item.label}</span>
                   </button>
                 ))}
               </div>
             </nav>
           )}
         </>
       )}
      
             {/* Hero Section */}
       <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-8">
         <div className="mb-16">
         {/* Desktop Portfolio Button - Hidden on Mobile */}
         <button 
               onClick={() => scrollToSection('pokemon')}
               className="hidden sm:block text-[#4b4b4b] mx-auto text-lg font-semibold tracking-widest uppercase mb-20 transition-colors cursor-pointer relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[5px] after:bg-white"
             >
               PORTFOLIO
             </button>
           
           <h1 className="text-[#dbc3a8] text-6xl md:text-9xl font-normal mb-16 leading-tight font-['Noto_Serif']">
             Niamh<br />
             Hawthorne
           </h1>
           
           <div className="flex flex-col sm:flex-row gap-8 sm:gap-32 md:gap-48 lg:gap-64 xl:gap-80 justify-center items-end w-full max-w-6xl">
             {/* Mobile Portfolio Button - Hidden on Desktop */}
             <button 
               onClick={() => scrollToSection('pokemon')}
               className="sm:hidden text-[#4b4b4b] mx-auto text-lg font-semibold tracking-widest uppercase transition-colors cursor-pointer relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[5px] after:bg-white"
             >
               PORTFOLIO
             </button>
             <button 
               onClick={() => scrollToSection('bio')}
               className="text-[#4b4b4b] mx-auto text-lg font-semibold tracking-widest uppercase hover:text-[#8b7355] transition-colors cursor-pointer relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[5px] after:bg-white"
             >
               VIDEO PRODUCER
             </button>
             <button 
               onClick={() => scrollToSection('contact')}
               className="text-[#4b4b4b] mx-auto text-lg font-semibold tracking-widest uppercase hover:text-[#8b7355] transition-colors cursor-pointer relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[5px] after:bg-white"
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
                             <div className="bg-[#4a4a4a] rounded-lg overflow-hidden shadow-lg aspect-[3/4] relative">
                 <Image 
                   src="/images/niamh-hawthorne-bio.jpg" 
                   alt="Niamh Hawthorne" 
                   fill 
                   sizes="(max-width: 1024px) 100vw, 50vw"
                   style={{ objectFit: "cover" }}
                 />
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
                           {pokemonProjects.map((project, i) => (
                <div key={i} className={`rounded-lg overflow-hidden shadow-lg aspect-video relative ${project.youtubeLink ? 'group cursor-pointer' : ''}`}>
                                     <Image 
                     src={project.imageSrc} 
                     alt={project.title}
                     fill
                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                     className={`object-cover transition-transform duration-300 ${project.youtubeLink ? 'group-hover:scale-105' : ''}`}
                   />
                  {project.youtubeLink && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                        <a 
                          href={project.youtubeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-white hover:text-[#e8d5c4] transition-colors font-medium text-sm underline"
                        >
                          View trailer
                        </a>
                      </div>
                    </div>
                  )}
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
             {wbGamesProjects.map((project, i) => (
               <div key={i} className="rounded-lg overflow-hidden shadow-lg aspect-video relative group cursor-pointer">
                                   <Image 
                    src={project.imageSrc} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="text-center text-white">
                     <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                     <p className="text-sm opacity-90 mb-2">{project.description}</p>
                     <a 
                       href={project.youtubeLink}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="inline-block text-white hover:text-[#e8d5c4] transition-colors font-medium text-sm underline"
                     >
                       View trailer
                     </a>
                   </div>
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-[#8b7355] text-lg leading-relaxed">
                Recently, I have been using my camera skills to create more travel-focused videos for social media platforms. This has helped me to improve my script writing, filming, and editing.
              </p>
              <p className="text-[#8b7355] text-lg leading-relaxed mb-16">
                                 The cameras I have been using to capture this content are the iPhone 15 Pro Max, GoPro Hero12 and the Nikon Zfc/Smart CrossFit&apos;s Osmo Pocket 3.
              </p>
              
              <div className="rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  muted
                  loop
                >
                  <source src="/clips/japan-2.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg aspect-[3/4]">
              <video 
                className="w-full h-full object-cover"
                controls
                muted
                loop
              >
                <source src="/clips/japan-1.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
                         <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-8">
               <input type="hidden" name="form-name" value="contact" />
               <input type="hidden" name="bot-field" />
               
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
