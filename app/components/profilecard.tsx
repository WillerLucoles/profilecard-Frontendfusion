// components/ProfileCard.tsx
'use client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

// 1. Importamos os novos componentes de botão
import FollowButton from './FollowButton.tsx';
import MessageButton from './MessageButton';

interface ProfileCardProps {
  name: string;
  role: string;
  followers: number;
  following: number;

  projects: number;
  description: string;
  specialties: string;
  profileImage: StaticImageData;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  followers: initialFollowers,
  following,
  projects,
  description,
  specialties,
  profileImage,
}) => {
  // 2. O estado e a lógica continuam no componente "pai"
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(initialFollowers);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
    setFollowersCount(isFollowing ? followersCount - 1 : followersCount + 1);
  };
  
  // (Função de exemplo para o botão de mensagem)
  const handleMessageClick = () => {
    console.log(`Enviando mensagem para ${name}...`);
    // Aqui você poderia abrir um modal, por exemplo
  }

  return (
    <div className="w-80 rounded-xl bg-white shadow-xl overflow-hidden">
      
      <div className="h-28 bg-gray-100"></div>

      <div className="flex justify-center -mt-14">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full ring-4 ring-purple-500 ring-opacity-70"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image
              src={profileImage}
              alt={`${name}'s profile`}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="text-center px-6 py-4">
        
        <h2 className="text-2xl font-bold text-gray-800 mt-2">{name}</h2>
        <p className="text-sm text-gray-500 mt-1">{role}</p>

        <div className="flex justify-around mt-6">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700">{followersCount}</p>
            <p className="text-xs text-gray-400">Seguidores</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700">{following}</p>
            <p className="text-xs text-gray-400">Seguindo</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700">{projects}</p>
            <p className="text-xs text-gray-400">Projetos</p>
          </div>
        </div>

        {/* 3. A mágica acontece aqui! */}
        <div className="flex justify-center gap-4 mt-6">
          <FollowButton
            isFollowing={isFollowing}
            onClick={handleFollowToggle}
          />
          <MessageButton
            onClick={handleMessageClick}
          />
        </div>

        <div className="text-center mt-6 text-xs text-gray-600">
          <p>{description}</p>
          <p className="mt-2 font-medium">{specialties}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;