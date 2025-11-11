// components/ProfileCard.tsx
'use client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
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

  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(initialFollowers);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
    setFollowersCount(isFollowing ? followersCount - 1 : followersCount + 1);
  };
  

  const handleMessageClick = () => {
    console.log(`Enviando mensagem para ${name}...`);

  }

  return (
    <div className="w-100 rounded-xl bg-white shadow-xl overflow-hidden pb-5">
      
      <div className="h-28 bg-[#0000001A]"></div>

      <div className="flex justify-center -mt-14">
        <div className="relative w-30 h-30">
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
        
        <h2 className="text-2xl font-bold text-[#1A1A1A] mt-2">{name}</h2>
        <p className="text-sm text-[#6B7280] mt-1">{role}</p>

        <div className="flex justify-around mt-6">
          <div className="text-center">
            <p className="text-lg font-bold text-[#1A1A1A]">{followersCount}</p>
            <p className="text-xs font-medium text-[#9CA3AF]">Seguidores</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-[#1A1A1A]">{following}</p>
            <p className="text-xs font-medium text-[#9CA3AF]">Seguindo</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-[#1A1A1A]">{projects}</p>
            <p className="text-xs font-medium text-[#9CA3AF]">Projetos</p>
          </div>
        </div>


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
          <p className='font-normal text-[#9CA3AF]'>{description}</p>
          <p className="mt-2 font-normal text-[#9CA3AF]">{specialties}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;