import React from 'react'
import { Router } from './router'
import Home from './pages/Home'
import UseStatePage from './pages/hooks/UseStatePage'
import UseEffectPage from './pages/hooks/UseEffectPage'
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
  };

  return (
    <Router routes={routes} />
  );
}

export default App;
