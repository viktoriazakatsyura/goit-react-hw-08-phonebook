import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header';
import { Loader } from '../components/Loader/Loader';

export const Container = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};