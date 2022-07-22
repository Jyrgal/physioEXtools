import { lazy, memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Tool from 'routes/tool';

const Layout = lazy(() => import('components/layout/layout'));
const Home = lazy(() => import('routes/home'));
const Tools = lazy(() => import('routes/tools'));

export const Navigation = memo(() => (
  <Routes>
    <Route path="" element={<Layout />}>
      <Route
        path="/"
        element={(
          <Suspense fallback={<>...</>}>
            <Home />
          </Suspense>
          )}
      />
      <Route
        path="tools"
        element={(
          <Suspense fallback={<>...</>}>
            <Tools />
          </Suspense>
          )}
      />
      <Route path="tools/:toolId" element={<Tool />} />
      <Route
        path="*"
        element={(
          <Suspense fallback={<>...</>}>
            <Home />
          </Suspense>
          )}
      />
    </Route>
  </Routes>
));
