import { useState } from 'react';
import Header from '@/components/Header';
import CharacterCard from '@/components/CharacterCard';
import CharacterModal from '@/components/CharacterModal';
import { ROSTER, Character } from '@/data/roster';

const Roster = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            AI <span className="text-sky-400">Roster</span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Meet our hyper-viral AI influencers dominating social media with 
            authentic personalities and massive reach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ROSTER.map((character) => (
            <CharacterCard
              key={character.name}
              character={character}
              onClick={() => setSelectedCharacter(character)}
            />
          ))}
        </div>
      </main>

      <CharacterModal
        character={selectedCharacter}
        isOpen={!!selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
      />
    </div>
  );
};

export default Roster;