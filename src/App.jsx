import React from 'react'
import { Router } from './router'
import Home from './pages/Home'
import UseStatePage from './pages/hooks/UseStatePage'
import UseEffectPage from './pages/hooks/UseEffectPage'
import UseLayoutEffectPage from './pages/hooks/UseLayoutEffectPage'
import UseMemoPage from './pages/hooks/UseMemoPage'
import UseCallbackPage from './pages/hooks/UseCallbackPage'
import UseDeferredValuePage from './pages/hooks/UseDeferredValuePage'
import UseIdPage from './pages/hooks/UseIdPage'
import UseImperativeHandlePage from './pages/hooks/UseImperativeHandlePage'
import UseSyncExternalStorePage from './pages/hooks/UseSyncExternalStorePage'
import UseOptimisticPage from './pages/hooks/UseOptimisticPage'
import UseActionStatePage from './pages/hooks/UseActionStatePage'
import UseRefPage from './pages/hooks/UseRefPage'
import UseReducerPage from './pages/hooks/UseReducerPage'
import PerformanceHooksPage from './pages/hooks/PerformanceHooksPage'
import TransitionHooksPage from './pages/hooks/TransitionHooksPage'
import LatestHooksPage from './pages/hooks/LatestHooksPage'

function App() {
  const routes = {
    '/': Home,
    '/hooks/use-state': UseStatePage,
    '/hooks/use-effect': UseEffectPage,
    '/hooks/use-ref': UseRefPage,
    '/hooks/use-reducer': UseReducerPage,
    '/hooks/performance': PerformanceHooksPage,
    '/hooks/transition': TransitionHooksPage,
    '/hooks/latest': LatestHooksPage,
    '/hooks/use-layout-effect': UseLayoutEffectPage,
    '/hooks/use-memo': UseMemoPage,
    '/hooks/use-callback': UseCallbackPage,
    '/hooks/use-deferred-value': UseDeferredValuePage,
    '/hooks/use-id': UseIdPage,
    '/hooks/use-imperative-handle': UseImperativeHandlePage,
    '/hooks/use-sync-external-store': UseSyncExternalStorePage,
    '/hooks/use-optimistic': UseOptimisticPage,
    '/hooks/use-action-state': UseActionStatePage,
  };

  return (
    <Router routes={routes} />
  );
}

export default App;
