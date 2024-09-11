import React, { ReactNode } from 'react';

const BannerBase = ({ children }: { children: ReactNode }) => {  
  return(
    <div className="w-full h-1/4 bg-secondary">
      {children}
    </div>
  );
};

export default BannerBase;
