import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'AI Roster', href: '/roster' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-900/20 border-b border-zinc-800/50">
      <div className="hairline"></div>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Blur Studios <span className="text-sky-400">AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors ${
                  location.pathname === item.href
                    ? 'text-sky-400'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-zinc-800/50">
            <div className="flex flex-col space-y-2 mt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`py-2 transition-colors ${
                    location.pathname === item.href
                      ? 'text-sky-400'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;