import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex justify-center pt-20 pb-5">
      {children}
    </div>
  );
};

export default Layout;
