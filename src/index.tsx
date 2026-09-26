import React from 'react';
import { createRoot } from 'react-dom/client';
import { InitialStateProvider } from './Providers/InitialStateProvider';
import { MainLayout } from './Components/Layouts/MainLayout';
import { ThemeProvider } from './Providers/ThemeProvider';
import { AppToolbarView } from './Components/Toolbar/AppToolbarView';
import { ConfigView } from './Views/Config/ConfigView';
import { ServiceView } from './Views/Coverage/ServiceCoverage/ServiceView';
import { ServiceEndpointsCoverageView } from './Views/Coverage/ServiceCoverage/ServiceEndpointsCoverageView';

const IndexRoute = () => {
  return (
    <MainLayout>
      <AppToolbarView />
      <ConfigView />
      <ServiceView />
      <ServiceEndpointsCoverageView />
    </MainLayout>
  );
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <InitialStateProvider>
        <IndexRoute />
      </InitialStateProvider>
    </ThemeProvider>
  </React.StrictMode>
);
