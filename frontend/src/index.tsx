import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import React from 'react';
import App from 'App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    {/* <Routes>
      <Route path="" element={<Layout />}>
        <Route
          path="/"
          element={(
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
          )}
        />
        <Route
          path="tools"
          element={(
            <React.Suspense fallback={<>...</>}>
              <Tools />
            </React.Suspense>
          )}
        />
        <Route path="tools/:toolId" element={<Tool />} />
        <Route
          path="*"
          element={(
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
          )}
        />
      </Route>
    </Routes> */}
    <App />
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
