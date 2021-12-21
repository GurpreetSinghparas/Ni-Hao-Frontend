import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Css
import './lib/niHaoCss';
// store
import store from './store';

const App = lazy(() => import('../src/container/app'));

const MainApp = () => {
  return (
    <Suspense fallback={<div />}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Suspense>
  );
};

export default MainApp;
