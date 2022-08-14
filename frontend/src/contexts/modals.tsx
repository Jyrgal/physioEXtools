import { LoginModal } from "modals/login";
import { SignupModal } from "modals/signup";
import {
  memo,
  createContext,
  useMemo,
  useContext,
  ReactNode,
  useCallback,
} from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

interface Store {
  toggleLogin: (replace?: boolean) => void;
  toggleSignup: (replace?: boolean) => void;
}

const handleProviderNotSet = () => {
  throw new Error("Notifications provider not set");
};

const ModalsContext = createContext<Store>({
  toggleLogin: handleProviderNotSet,
  toggleSignup: handleProviderNotSet,
});

export const ModalsProvider = memo(({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };
  const navigate = useNavigate();

  const toggleLogin = useCallback((replace?: boolean) => {
    navigate("login", {
      replace,
      state: { backgroundLocation: location },
    });
  }, []);

  const toggleSignup = useCallback((replace?: boolean) => {
    navigate("signup", {
      replace,
      state: { backgroundLocation: location },
    });
  }, []);

  const data: Store = useMemo(
    () => ({ toggleLogin, toggleSignup }),
    [toggleLogin, toggleSignup]
  );

  return (
    <ModalsContext.Provider value={data}>
      {/* <LoginModal
        open={loginModalOpen}
        onDismiss={() => setLoginModalOpen(false)}
      /> */}
      {/* <SignupModal
        open={signupModalOpen}
        onDismiss={() => setSignupModalOpen(false)}
      /> */}
      {state?.backgroundLocation && (
        <Routes>
          <Route
            path="login"
            element={<LoginModal onDismiss={() => navigate(-1)} />}
          />
          <Route
            path="signup"
            element={<SignupModal onDismiss={() => navigate(-1)} />}
          />
        </Routes>
      )}
      {children}
    </ModalsContext.Provider>
  );
});

export const useModals = () => useContext(ModalsContext);
