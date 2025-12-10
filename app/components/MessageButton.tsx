// app/components/MessageButton.tsx
import React from 'react';

interface MessageButtonProps {
  onClick?: () => void;
  name?: string;
}

const MessageButton: React.FC<MessageButtonProps> = ({ onClick, name }) => {
  return (
    <button
      onClick={onClick}

      aria-label={`Enviar mensagem para ${name || 'usuário'}`}
      className="
        group flex items-center justify-center gap-2 px-4 py-3 rounded-lg 
        bg-gray-100 hover:bg-gray-200 text-[#374151] font-medium text-sm 
        transition-all duration-200 flex-1 max-w-[153px] shadow-md hover:shadow-lg
        focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-300 focus-visible:ring-offset-1
      "
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"

        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 transition-transform group-hover:scale-110"
      >
        <g clipPath="url(#clip0_1_230)">
          <path d="M16.5 5.25L9.75675 9.54525C9.52792 9.67816 9.268 9.74817 9.00338 9.74817C8.73875 9.74817 8.47883 9.67816 8.25 9.54525L1.5 5.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 3H3C2.17157 3 1.5 3.67157 1.5 4.5V13.5C1.5 14.3284 2.17157 15 3 15H15C15.8284 15 16.5 14.3284 16.5 13.5V4.5C16.5 3.67157 15.8284 3 15 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_1_230">
            <rect width="18" height="18" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      Mensagem
    </button>
  );
};

export default MessageButton;