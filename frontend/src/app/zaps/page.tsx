import Appbar from '@/components/Appbar';
import ProfessionalTier from '@/components/ProfessionalTier';
import Sidebar from '@/components/Sidebar';
import ZapList from '@/components/ZapList';
import React from 'react';

function Zaps() {
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
