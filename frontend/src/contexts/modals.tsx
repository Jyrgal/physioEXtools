import {
  memo,
  createContext,
  useMemo,
  useContext,
  ReactNode,
  useCallback,
  useState,
} from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface Store {
  toggleLogin: (open: boolean) => void;
}

const handleProviderNotSet = () => {
  throw new Error("Notifications provider not set");
};

const ModalsContext = createContext<Store>({
  toggleLogin: handleProviderNotSet,
});

export const ModalsProvider = memo(({ children }: { children: ReactNode }) => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const toggleLogin = useCallback(
    (open: boolean) => {
      setLoginModalOpen(open);
    },
    [setLoginModalOpen]
  );

  const data: Store = useMemo(() => ({ toggleLogin }), [toggleLogin]);

  return (
    <ModalsContext.Provider value={data}>
      <Modal
        isOpen={loginModalOpen}
        onRequestClose={() => setLoginModalOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button onClick={() => setLoginModalOpen(false)}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
      {children}
    </ModalsContext.Provider>
  );
});

export const useModals = () => useContext(ModalsContext);
