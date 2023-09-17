import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('../Routes/Home'));

const MyComponent = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);

export default MyComponent;
