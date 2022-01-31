import React from 'react';
import { Outlet } from 'react-router-dom';

function ServiceLayout() {
  return (
    <main>
      <Outlet />
    </main>
  )
};

export default ServiceLayout;