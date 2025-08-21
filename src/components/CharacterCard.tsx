import { useState } from 'react';
import { Instagram, Play, Facebook } from 'lucide-react';
import { Character } from '@/data/roster';

interface CharacterCardProps {
  character: Character;
  onClick?: () => void;
}

const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getCharacterClass = (name: string) => {
    const normalized = name.toLowerCase().replace(/[^a-z]/g, '');
    if (normalized.includes('aurora')) return 'character-aurora';
    if (normalized.includes('nana') || normalized.includes('nessa')) return 'character-nana';
    if (normalized.includes('granny')) return 'character-granny';
    if (normalized.includes('joey')) return 'character-joey';
    return '';
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <Instagram size={16} />;
      case 'tiktok':
        return <Play size={16} />;
      case 'facebook':
        return <Facebook size={16} />;
      default:
        return null;
    }
  };

  const formatCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(0)}k`;
    }
    return count.toLocaleString();
  };

  return (
    <div 
      className={`blur-card group cursor-pointer overflow-hidden character-card ${getCharacterClass(character.name)}`}
      onClick={onClick}
      style={{
        background: `linear-gradient(180deg, ${character.color}22, hsl(var(--ink)))`
      }}
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={character.img}
          alt={character.name}
          className={`w-full h-full object-cover transition-all duration-300 ${
            imageLoaded 
              ? 'filter grayscale group-hover:grayscale-0 group-hover:scale-105' 
              : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-zinc-800 animate-pulse"></div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-xl mb-2 text-white">{character.name}</h3>
        <p className="text-zinc-300 text-sm mb-4 line-clamp-2">{character.bio}</p>
        
        <div className="flex flex-wrap gap-2">
          {Object.entries(character.socials).map(([platform, data]) => (
            <a
              key={platform}
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pill group/social social-icon"
              onClick={(e) => e.stopPropagation()}
            >
              {getSocialIcon(platform)}
              <span className="capitalize">{platform}</span>
              <strong className="text-sky-400">{formatCount(data.count)}</strong>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;