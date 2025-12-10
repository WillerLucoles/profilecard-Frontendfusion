'use client';
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import FollowButton from './FollowButton';
import MessageButton from './MessageButton';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Props do componente ProfileCard:
// - name, role, etc. -> informações exibidas no cartão.
// - profileImage pode ser uma StaticImageData (importada) ou uma URL string.
interface ProfileCardProps {
  name: string;
  role: string;
  followers: number;
  following: number;
  projects: number;
  description: string;
  specialties: string;
  profileImage: StaticImageData | string;
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
  // useLocalStorage retorna: [valor, setter, flagLoaded]
  // - isFollowing: estado persistido (vindo do localStorage via hook)
  // - isStorageLoaded: indica quando o valor guardado foi lido (evita flash/hydration)
  const [isFollowing, setIsFollowing, isStorageLoaded] = useLocalStorage<boolean>(
    `followState_${name}`, 
    false
  );

  // Estado derivado de display: contagem de seguidores que considera o follow local.
  // Não modifica a fonte original (initialFollowers), apenas ajusta a exibição.
  const [followersCount, setFollowersCount] = useState(initialFollowers);

  // Perfil imagem: pode ser StaticImageData (next/image) ou string;
  // mantemos em estado para permitir fallback em onError.
  const [imgSrc, setImgSrc] = useState<StaticImageData | string>(profileImage);

  // Sincroniza a contagem de seguidores depois que o valor persistido for carregado.
  // - Se o armazenamento indicar que o usuário já segue, soma 1 ao initialFollowers.
  // - isStorageLoaded evita discrepância entre SSR/CSR.
  useEffect(() => {
    if (isStorageLoaded && isFollowing) {
      setFollowersCount(initialFollowers + 1);
    } else {
      setFollowersCount(initialFollowers);
    }
  }, [isStorageLoaded, isFollowing, initialFollowers]);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  const handleMessageClick = () => {
    console.log(`Enviando mensagem para ${name}...`);
  };

  return (
    <article className="w-100 rounded-xl bg-white shadow-xl overflow-hidden pb-5 transition-transform hover:scale-[1.01] duration-300">
      
      <div className="h-28 bg-overlay" aria-hidden="true"></div>

      <div className="flex justify-center -mt-14">
        <div className="relative w-30 h-30">
          <div className="absolute inset-0 rounded-full ring-4 ring-purple-500 ring-opacity-70 animate-pulse"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
            <Image
              src={imgSrc}
              alt={`Foto de perfil de ${name}`}
              className="w-full h-full object-cover"
              priority
              placeholder={typeof imgSrc !== 'string' ? "blur" : undefined}
              // Fallback: se a imagem falhar (ex.: import quebrado ou URL inválida),
              onError={() => {
                setImgSrc(`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`);
              }}
            />
          </div>
        </div>
      </div>

      <div className="text-center px-6 py-4">
        <h2 className="text-2xl font-bold text-primary mt-2">{name}</h2>
        <p className="text-sm text-secondary mt-1">{role}</p>

        <div className="flex justify-around mt-6" role="list">
          {/* Uso de role="list" e role="listitem" para melhorar a navegação por AT,
              principalmente quando o conteúdo é puramente informacional (número + label). */}
          <div className="text-center" role="listitem">
            <p className="text-lg font-bold text-primary">
              {/* Exibe contagem segura apenas após o carregamento do storage */}
              {isStorageLoaded ? followersCount : initialFollowers}
            </p>
            <p className="text-xs font-medium text-tertiary">Seguidores</p>
          </div>
          <div className="text-center" role="listitem">
            <p className="text-lg font-bold text-primary">{following}</p>
            <p className="text-xs font-medium text-tertiary">Seguindo</p>
          </div>
          <div className="text-center" role="listitem">
            <p className="text-lg font-bold text-primary">{projects}</p>
            <p className="text-xs font-medium text-tertiary">Projetos</p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          {/* Passa `name` para FollowButton para permitir keys únicas no localStorage
              e facilitar testes (ex.: checar followState_<name> no storage). */}
          <FollowButton
            isFollowing={isFollowing}
            onClick={handleFollowToggle}
            name={name}
          />
          <MessageButton
            onClick={handleMessageClick}
            name={name}
          />
        </div>

        <div className="text-center mt-6 text-xs text-gray-600">
          <p className='font-normal text-tertiary'>{description}</p>
          <p className="mt-2 font-normal text-tertiary">{specialties}</p>
        </div>
      </div>
    </article>
  );
};

export default ProfileCard;