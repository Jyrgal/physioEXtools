import { memo } from "react";
import Modal from "react-modal";
import { Login } from "routes/login";

export const LoginModal = memo(({ onDismiss }: { onDismiss: () => void }) => {
  return (
    <Modal
      isOpen
      onRequestClose={() => onDismiss()}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          height: "90%",
          padding: 0,
        },
      }}
    >
      <Login modal />
    </Modal>
  );
});
