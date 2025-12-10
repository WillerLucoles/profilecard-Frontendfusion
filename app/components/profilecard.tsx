// app/components/profilecard.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import FollowButton from './FollowButton';
import MessageButton from './MessageButton';
import { useLocalStorage } from '../hooks/useLocalStorage';

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
  // Usando o Custom Hook: abstrai toda a lógica de persistência e hidratação
  const [isFollowing, setIsFollowing, isStorageLoaded] = useLocalStorage<boolean>(
    `followState_${name}`, // Chave única por usuário
    false
  );

  // Estado local derivado para exibição visual imediata
  const [followersCount, setFollowersCount] = useState(initialFollowers);

  // Sincroniza o contador visual quando o storage termina de carregar
  useEffect(() => {
    if (isStorageLoaded && isFollowing) {
      setFollowersCount(initialFollowers + 1);
    } else {
      setFollowersCount(initialFollowers);
    }
  }, [isStorageLoaded, isFollowing, initialFollowers]);

  const handleFollowToggle = () => {
    const newState = !isFollowing;
    setIsFollowing(newState); // O hook salva automaticamente no localStorage
  };

  const handleMessageClick = () => {
    console.log(`Enviando mensagem para ${name}...`);
    alert(`Funcionalidade de mensagem para ${name} em breve!`);
  };

  return (
    <article className="w-100 rounded-xl bg-white shadow-xl overflow-hidden pb-5 transition-transform hover:scale-[1.01] duration-300">
      <div className="h-28 bg-[#0000001A]" aria-hidden="true"></div>

      <div className="flex justify-center -mt-14">
        <div className="relative w-30 h-30">
          <div className="absolute inset-0 rounded-full ring-4 ring-purple-500 ring-opacity-70 animate-pulse"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
            <Image
              src={profileImage}
              alt={`Foto de perfil de ${name}`}
              className="w-full h-full object-cover"
              priority
              placeholder="blur" 
            />
          </div>
        </div>
      </div>

      <div className="text-center px-6 py-4">
        <h2 className="text-2xl font-bold text-[#1A1A1A] mt-2">{name}</h2>
        <p className="text-sm text-[#6B7280] mt-1">{role}</p>

        <div className="flex justify-around mt-6" role="list">
          <div className="text-center" role="listitem">
            {/* Exibe o número correto apenas após carregar o storage para evitar 'pulo' visual */}
            <p className="text-lg font-bold text-[#1A1A1A]">
              {isStorageLoaded ? followersCount : initialFollowers}
            </p>
            <p className="text-xs font-medium text-[#9CA3AF]">Seguidores</p>
          </div>
          <div className="text-center" role="listitem">
            <p className="text-lg font-bold text-[#1A1A1A]">{following}</p>
            <p className="text-xs font-medium text-[#9CA3AF]">Seguindo</p>
          </div>
          <div className="text-center" role="listitem">
            <p className="text-lg font-bold text-[#1A1A1A]">{projects}</p>
            <p className="text-xs font-medium text-[#9CA3AF]">Projetos</p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <FollowButton
            isFollowing={isFollowing}
            onClick={handleFollowToggle}
            name={name}
          />
          <MessageButton
            onClick={handleMessageClick}
          />
        </div>

        <div className="text-center mt-6 text-xs text-gray-600">
          <p className='font-normal text-[#9CA3AF]'>{description}</p>
          <p className="mt-2 font-normal text-[#9CA3AF]">{specialties}</p>
        </div>
      </div>
    </article>
  );
};

export default ProfileCard;