import { LoginModal } from "modals/login";
import { SignupModal } from "modals/signup";
import {
  memo,
  createContext,
  useMemo,
  useContext,
  ReactNode,
  useCallback,
  useState,
} from "react";

interface Store {
  toggleLogin: (open: boolean) => void;
  toggleSignup: (open: boolean) => void;
}

const handleProviderNotSet = () => {
  throw new Error("Notifications provider not set");
};

const ModalsContext = createContext<Store>({
  toggleLogin: handleProviderNotSet,
  toggleSignup: handleProviderNotSet,
});

export const ModalsProvider = memo(({ children }: { children: ReactNode }) => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  const toggleLogin = useCallback(
    (open: boolean) => {
      setLoginModalOpen(open);
    },
    [setLoginModalOpen]
  );

  const toggleSignup = useCallback(
    (open: boolean) => {
      setSignupModalOpen(open);
    },
    [setSignupModalOpen]
  );

  const data: Store = useMemo(
    () => ({ toggleLogin, toggleSignup }),
    [toggleLogin, toggleSignup]
  );

  return (
    <ModalsContext.Provider value={data}>
      <LoginModal
        open={loginModalOpen}
        onDismiss={() => setLoginModalOpen(false)}
      />
      <SignupModal
        open={signupModalOpen}
        onDismiss={() => setSignupModalOpen(false)}
      />
      {children}
    </ModalsContext.Provider>
  );
});

export const useModals = () => useContext(ModalsContext);
