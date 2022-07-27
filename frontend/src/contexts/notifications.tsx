import {
  memo,
  createContext,
  useMemo,
  useContext,
  ReactNode,
  useCallback,
} from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Store {
  notifySuccess: (message: string) => void;
  notifyError: (message: string) => void;
  notifyWarn: (message: string) => void;
  notifyInfo: (message: string) => void;
}

const handleProviderNotSet = () => {
  throw new Error("Notifications provider not set");
};

const NotificationsContext = createContext<Store>({
  notifySuccess: handleProviderNotSet,
  notifyError: handleProviderNotSet,
  notifyWarn: handleProviderNotSet,
  notifyInfo: handleProviderNotSet,
});

export const NotificationsProvider = memo(
  ({ children }: { children: ReactNode }) => {
    const notifySuccess = useCallback((message: string) => {
      toast.success(`Success Notification !${message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }, []);
    const notifyError = useCallback((message: string) => {
      toast.error(`Error Notification !${message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }, []);
    const notifyWarn = useCallback((message: string) => {
      toast.warn(`Warning Notification !${message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }, []);
    const notifyInfo = useCallback((message: string) => {
      toast.info(`Info Notification !${message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }, []);
    const data: Store = useMemo(
      () => ({ notifySuccess, notifyError, notifyWarn, notifyInfo }),
      [notifySuccess, notifyError, notifyWarn, notifyInfo]
    );

    return (
      <NotificationsContext.Provider value={data}>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {children}
      </NotificationsContext.Provider>
    );
  }
);

export const useNotifications = () => useContext(NotificationsContext);
