import { lazy, memo, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Login } from "routes/login";
import { Signup } from "routes/signup";
import Tool from "routes/tool";

const Layout = lazy(() => import("components/layout/layout"));
const Home = lazy(() => import("routes/home"));
const Tools = lazy(() => import("routes/tools"));
const Pain = lazy(() => import("routes/pain"));

export const Navigation = memo(() => {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };
  return (
    <div>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<>...</>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="tools"
            element={
              <Suspense fallback={<>...</>}>
                <Tools />
              </Suspense>
            }
          />
          <Route path="tools/:toolIds" element={<Tool />} />
          <Route
            path="pain"
            element={
              <Suspense fallback={<>...</>}>
                <Pain />
              </Suspense>
            }
          />
          <Route path="pain/:toolIds" element={<Tool />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="*"
            element={
              <Suspense fallback={<>...</>}>
                <Home />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
});
