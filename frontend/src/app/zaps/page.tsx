import Appbar from '@/components/Appbar';
import ProfessionalTier from '@/components/ProfessionalTier';
import ZapList from '@/components/ZapList';
import React from 'react';

function Zaps() {
  return (
    <div>
      <ProfessionalTier />
      <div className="mx-3">
        <Appbar />
        <ZapList />
      </div>
    </div>
  );
}

export default Zaps;
