'use client';

import Appbar from '@/components/Appbar';
import ProfessionalTier from '@/components/ProfessionalTier';
import Sidebar from '@/components/Sidebar';
import ZapList from '@/components/ZapList';
import { TOKEN } from '@/constants';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function Zaps() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem(TOKEN)) {
      router.push('/login');
    }
  }, []);

  return (
    <div>
      <ProfessionalTier />
      <div className="mx-3">
        <Appbar />
        <div className="flex mt-4">
          <Sidebar />
          <ZapList />
        </div>
      </div>
    </div>
  );
}

export default Zaps;
