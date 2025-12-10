import React from 'react';
import { CheckIcon, UserPlusIcon } from './IconsSVGs';

// Props:
// - isFollowing: estado visual (true => "Seguindo") — o controle do estado pode vir do pai.
// - onClick: callback quando o botão é clicado.
// - name: nome do usuário (utilizar em labels/armazenamento/testes).
interface FollowButtonProps {
  isFollowing: boolean;
  onClick: () => void;
  name?: string; 
}

const FollowButton: React.FC<FollowButtonProps> = ({ isFollowing, onClick, name }) => {
  // label amigável para leitores de tela (dinâmico com o nome quando disponível)
  const label = isFollowing 
    ? `Deixar de seguir ${name || 'usuário'}` 
    : `Seguir ${name || 'usuário'}`;

  return (
    <button
      onClick={onClick}
      aria-label={label}             // descreve a ação para leitores de tela
      aria-pressed={isFollowing}     // indica estado binário (ligado/desligado)
      className={`
        group flex items-center justify-center gap-2 px-6 py-3 rounded-lg 
        text-white font-medium text-sm transition-all duration-300 ease-in-out
        flex-1 max-w-[153px] focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2
        ${
          isFollowing
            ? 'bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30 hover:shadow-xl focus-visible:ring-green-500'
            : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 shadow-lg shadow-indigo-500/30 hover:shadow-xl focus-visible:ring-purple-500'
        }
      `}
    >
      {isFollowing ? <CheckIcon /> : <UserPlusIcon />}
      <span>{isFollowing ? 'Seguindo' : 'Seguir'}</span>
    </button>
  );
};

export default FollowButton;