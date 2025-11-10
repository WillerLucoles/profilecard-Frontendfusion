// pages/profile.tsx

import Head from 'next/head';
import ProfileCard from './components/profilecard';

import userAvatar from './assets/AvatarAnaSilva.png';

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#A06DC2] to-[#8149A7] p-8">

      <Head>
        <title>Perfil - Ana Silva</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center">
        <ProfileCard
          name="Ana Silva"
          role="Desenvolvedora Full Stack"
          followers={980}
          following={180}
          projects={42}
          description="Apaixonada por criar experiências digitais incríveis."
          specialties="Especialista em React e Node.js."

          profileImage={userAvatar}
        />
      </main>
    </div>
  );
}