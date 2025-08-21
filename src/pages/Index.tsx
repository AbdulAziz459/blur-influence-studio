import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, TrendingUp, Package } from 'lucide-react';
import Header from '@/components/Header';
import CharacterCard from '@/components/CharacterCard';
import CharacterModal from '@/components/CharacterModal';
import { ROSTER, Character } from '@/data/roster';
import viewerReactionsImg from '@/assets/viewer-reactions.jpg';

const Index = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Form submission is handled by formsubmit.co action
    setTimeout(() => {
      setFormStatus('success');
    }, 1000);
  };

  const whatWeDoItems = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI Character Development",
      description: "Creating authentic, hyper-engaging AI personalities with unique voices and massive appeal."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Content Creation Engine", 
      description: "High-velocity, viral content production across all major social platforms at scale."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Brand Collaborations",
      description: "Strategic partnerships that drive authentic engagement and measurable ROI for brands."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Merchandise & Products",
      description: "Extending AI influence into physical products and exclusive merchandise lines."
    }
  ];

  const whyBlurPoints = [
    "350M+ views/month across owned channels",
    "Built by creators with 5B+ views and 6+ years of social media experience", 
    "Plug-and-play brand opportunities",
    "Scalable to hundreds/thousands of AI influencers"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="rounded-3xl p-[2px] bg-gradient-to-br from-sky-400/55 via-cyan-400/25 to-transparent">
            <div className="relative rounded-3xl border border-zinc-700/70 bg-gradient-to-b from-zinc-900/95 to-zinc-950/95 px-8 md:px-12 py-16 overflow-hidden backdrop-blur-sm">
              <div className="hairline mx-8 -mt-px absolute top-0 left-0 right-0"></div>
              <div className="glow-orb -right-40 -top-24"></div>
              <div className="hero-scan"></div>

              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-4">Blur Studios AI</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                {["Blurring", "the", "Lines", "Between"].map((word, i) => (
                  <span key={i} className="hero-word mr-2" style={{ animationDelay: `${i * 20}ms` }}>
                    {word}
                  </span>
                ))} <br />
                <span className="text-sky-400">
                  {["Reality", "and", "AI"].map((word, i) => (
                    <span key={i} className="hero-word mr-2" style={{ animationDelay: `${(i + 4) * 20}ms` }}>
                      {word}
                    </span>
                  ))}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-8">
                We create hyper-viral AI influencers and characters that dominate the internet
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                  Work With Us
                  <ArrowRight size={20} />
                </a>
                <Link to="/roster" className="btn-secondary inline-flex items-center gap-2">
                  Meet the Talent
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About Blur Studios</h2>
            <div className="max-w-4xl mx-auto text-lg md:text-xl text-zinc-300 leading-relaxed">
              <p className="mb-6">
                We generate <strong className="text-sky-400">2× Super Bowl views per month</strong> and have built 
                a network of AI influencers with <strong className="text-sky-400">5B+ lifetime views</strong> and 
                <strong className="text-sky-400"> 20M+ followers</strong> across all platforms.
              </p>
              <p>
                Our mission is to transform synthetic personalities into social powerhouses that drive 
                authentic engagement and create genuine connections with audiences worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What We Do</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Full-stack AI influencer development from concept to viral content creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWeDoItems.map((item, index) => (
              <div key={index} className="blur-card p-8 text-center group stagger-item">
                <div className="text-sky-400 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Roster Preview */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet Our AI Talent</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
              Hyper-viral AI influencers with authentic personalities and massive reach
            </p>
            <Link to="/roster" className="btn-secondary inline-flex items-center gap-2">
              View Full Roster
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ROSTER.map((character, index) => (
              <div key={character.name} className="stagger-item">
                <CharacterCard
                  character={character}
                  onClick={() => setSelectedCharacter(character)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Blur AI */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="blur-card p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Blur AI</h2>
                <ul className="space-y-4">
                  {whyBlurPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-zinc-300 text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-sky-400 mb-4">350M+</div>
                <div className="text-xl text-zinc-300">Monthly Views</div>
                <div className="mt-8 text-lg text-zinc-400 italic">
                  "The Pixar of the AI influencer era—faster, cheaper, infinitely scalable."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Viewer Reactions */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Viewer Reactions</h2>
            <p className="text-xl text-zinc-400">
              Real engagement from millions of authentic followers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="blur-card overflow-hidden">
              <img 
                src={viewerReactionsImg} 
                alt="Excited viewers engaging with AI influencer content"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="blur-card overflow-hidden">
              <img 
                src={viewerReactionsImg} 
                alt="Diverse audience reactions to viral AI content"
                className="w-full h-64 object-cover filter hue-rotate-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-zinc-400 mb-8">
              Ready to harness the power of AI influencers for your brand?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Collaborate</h3>
              <ul className="space-y-4 text-zinc-300">
                <li>• Book our characters for branded content</li>
                <li>• Explore investment or acquisition opportunities</li> 
                <li>• Pitch talent, collabs, or creative ideas</li>
              </ul>
            </div>

            <div>
              <form 
                method="POST" 
                action="https://formsubmit.co/blurmediagroups@gmail.com"
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm text-zinc-300 mb-2">Name *</label>
                  <input 
                    name="name" 
                    type="text"
                    required 
                    className="form-input" 
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-zinc-300 mb-2">Email *</label>
                  <input 
                    name="email" 
                    type="email" 
                    required 
                    className="form-input" 
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-zinc-300 mb-2">Company</label>
                  <input 
                    name="company" 
                    type="text" 
                    className="form-input" 
                    placeholder="Company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-zinc-300 mb-2">Message</label>
                  <textarea 
                    name="message" 
                    rows={5} 
                    className="form-input resize-none" 
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className={`btn-primary w-full ${
                    formStatus === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Submit'}
                </button>

                {formStatus === 'success' && (
                  <div className="text-green-400 text-center">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <CharacterModal
        character={selectedCharacter}
        isOpen={!!selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
      />
    </div>
  );
};

export default Index;