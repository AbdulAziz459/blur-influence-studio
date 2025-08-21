import { useEffect } from 'react';
import { X } from 'lucide-react';
import { Character } from '@/data/roster';

interface CharacterModalProps {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

const CharacterModal = ({ character, isOpen, onClose }: CharacterModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !character) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <div 
        className="relative z-10 w-full max-w-2xl blur-card p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/50 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <h3 
          id="modal-title"
          className="text-3xl font-bold mb-4 text-white"
          style={{ color: character.color }}
        >
          {character.name}
        </h3>
        
        <p className="text-zinc-300 text-lg leading-relaxed mb-4">
          {character.bio}
        </p>
        
        {character.tagline && (
          <p className="text-zinc-400 italic text-base">
            "{character.tagline}"
          </p>
        )}
      </div>
    </div>
  );
};

export default CharacterModal;