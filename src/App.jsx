import { lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const ComicsPage = lazy(() => import('./pages/ComicsPage'));

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="comics" element={<ComicsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
