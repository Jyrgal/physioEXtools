import {
  memo,
  createContext,
  useMemo,
  useContext,
  ReactNode,
  useCallback,
} from "react";
import { NewUser } from "types/user";

interface Store {
  signUp: (newUser: NewUser) => void;
}

const handleProviderNotSet = () => {
  throw new Error("Auth provider not set");
};

const AuthContext = createContext<Store>({
  signUp: handleProviderNotSet,
});

export const AuthProvider = memo(({ children }: { children: ReactNode }) => {
  const signUp = useCallback((newUser: NewUser) => {
    console.log(newUser);
  }, []);
  const data: Store = useMemo(() => ({ signUp }), [signUp]);

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
});

export const useAuth = () => useContext(AuthContext);
