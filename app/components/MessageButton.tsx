import React from 'react';
import { MessageIcon } from './IconsSVGs';

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
        bg-gray-100 hover:bg-gray-200 
        text-btn-text font-medium text-sm  /* Usando a nova cor semântica */
        transition-all duration-200 flex-1 max-w-[153px]
        shadow-md hover:shadow-lg 
        focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-300 focus-visible:ring-offset-1
      "
    >
      <MessageIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
      Mensagem
    </button>
  );
};

export default MessageButton;