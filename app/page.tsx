// pages/profile.tsx

import Head from 'next/head';
import ProfileCard from './components/profilecard';
import { userProfileData } from './data/userData';

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#A06DC2] to-[#8149A7] p-8">
      <main className="flex w-full flex-1 flex-col items-center justify-center">
        <ProfileCard
          {...userProfileData}
        />
      </main>
    </div>
  );
}