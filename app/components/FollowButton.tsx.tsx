// components/FollowButton.tsx
import React from 'react';

interface FollowButtonProps {
  isFollowing: boolean;
  onClick: () => void;
}

const FollowButton: React.FC<FollowButtonProps> = ({ isFollowing, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium text-sm transition-all duration-300 ease-in-out w-1/2
        ${
          isFollowing
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700'
        }`}
    >
      {isFollowing ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Seguindo
        </>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM12 14v4m-2 2h4" />
          </svg>
          Seguir
        </>
      )}
    </button>
  );
};

export default FollowButton;