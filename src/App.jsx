import { lazy } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';

import { ErrorPage, NotFoundPage, WithSuspense } from "./utilities/ErrorComponent";

import GeneralLayout from '@/layouts/general.layout';
import routes from './routes';

const HomePage = WithSuspense(lazy(() => import('./views/Home')))
const ContactPage = WithSuspense(lazy(() => import('./views/Contact')))
const AboutPage = WithSuspense(lazy(() => import('./views/About')))
const WorksPage = WithSuspense(lazy(() => import('./views/Works')))
const WorkDetailsPage = WithSuspense(lazy(() => import('./views/WorkDetails')))
const NotFoundPageWithSuspense = WithSuspense(NotFoundPage);

function App() {
  if ('startViewTransition' in document) {
    document.documentElement.classList.add('view-transition-support');
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<ErrorPage />}>
        <Route path="/" element={<GeneralLayout />}>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.contact} element={<ContactPage />} />
          <Route path={routes.about} element={<AboutPage />} />
          <Route path={routes.work} element={<WorksPage />} />
          <Route path={routes.workdetails} element={<WorkDetailsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPageWithSuspense />} />
      </Route>
    )
  );

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;