// app/components/FollowButton.tsx
import React from 'react';

interface FollowButtonProps {
  isFollowing: boolean;
  onClick: () => void;

  name?: string; 
}

const FollowButton: React.FC<FollowButtonProps> = ({ isFollowing, onClick, name }) => {
  // Define um rótulo descritivo para leitores de tela
  const label = isFollowing 
    ? `Deixar de seguir ${name || 'usuário'}` 
    : `Seguir ${name || 'usuário'}`;

  return (
    <button
      onClick={onClick}
      aria-label={label}
      aria-pressed={isFollowing}
      className={`
        group flex items-center justify-center gap-2 px-6 py-3 rounded-lg 
        text-white font-medium text-sm transition-all duration-300 ease-in-out
        flex-1 max-w-[153px]
        focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2
        
        ${
          isFollowing
            ? 'bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30 hover:shadow-xl focus-visible:ring-green-500'
            : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 shadow-lg shadow-indigo-500/30 hover:shadow-xl focus-visible:ring-purple-500'
        }
      `}
    >
      {isFollowing ? (
        <>
          {/* Ícone de "Check" para estado seguindo */}
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L4.75 9.25L1 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Seguindo</span>
        </>
      ) : (
        <>
          {/* Ícone de "User Plus" para estado de seguir */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0001 17.5C15.0001 15.7319 14.2977 14.0362 13.0475 12.7859C11.7972 11.5357 10.1015 10.8333 8.33341 10.8333C6.5653 10.8333 4.86961 11.5357 3.61937 12.7859C2.36913 14.0362 1.66675 15.7319 1.66675 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.33341 10.8333C10.6346 10.8333 12.5001 8.96785 12.5001 6.66667C12.5001 4.36548 10.6346 2.5 8.33341 2.5C6.03223 2.5 4.16675 4.36548 4.16675 6.66667C4.16675 8.96785 6.03223 10.8333 8.33341 10.8333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.3333 16.6666C18.3333 13.8583 16.6667 11.25 15 9.99998C15.5478 9.58895 15.9859 9.04922 16.2755 8.42854C16.565 7.80786 16.6971 7.12537 16.66 6.44148C16.6229 5.75759 16.4178 5.09338 16.0629 4.50765C15.7079 3.92191 15.2141 3.4327 14.625 3.08331" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Seguir</span>
        </>
      )}
    </button>
  );
};

export default FollowButton;