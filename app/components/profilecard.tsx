// components/ProfileCard.tsx
'use client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

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

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleFollowToggle}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium text-sm transition-all duration-300 ease-in-out w-1/2
              ${isFollowing
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700'
              }`}
          >
            {isFollowing ? (
              <>   
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 4.5L6.75 12.75L3 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>  
                Seguindo
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0001 17.5C15.0001 15.7319 14.2977 14.0362 13.0475 12.7859C11.7972 11.5357 10.1015 10.8333 8.33341 10.8333C6.5653 10.8333 4.86961 11.5357 3.61937 12.7859C2.36913 14.0362 1.66675 15.7319 1.66675 17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.33341 10.8333C10.6346 10.8333 12.5001 8.96785 12.5001 6.66667C12.5001 4.36548 10.6346 2.5 8.33341 2.5C6.03223 2.5 4.16675 4.36548 4.16675 6.66667C4.16675 8.96785 6.03223 10.8333 8.33341 10.8333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.3333 16.6666C18.3333 13.8583 16.6667 11.25 15 9.99998C15.5478 9.58895 15.9859 9.04922 16.2755 8.42854C16.565 7.80786 16.6971 7.12537 16.66 6.44148C16.6229 5.75759 16.4178 5.09338 16.0629 4.50765C15.7079 3.92191 15.2141 3.4327 14.625 3.08331" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Seguir
              </>
            )}
          </button>

          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-100 text-gray-700 font-medium text-sm hover:bg-gray-200 transition-colors duration-200 w-1/2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_230)">
            <path d="M16.5 5.25L9.75675 9.54525C9.52792 9.67816 9.268 9.74817 9.00338 9.74817C8.73875 9.74817 8.47883 9.67816 8.25 9.54525L1.5 5.25" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 3H3C2.17157 3 1.5 3.67157 1.5 4.5V13.5C1.5 14.3284 2.17157 15 3 15H15C15.8284 15 16.5 14.3284 16.5 13.5V4.5C16.5 3.67157 15.8284 3 15 3Z" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1_230">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            Mensagem
          </button>
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