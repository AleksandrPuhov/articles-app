import { FC, Suspense, lazy } from "react";

import { Modal } from "@shared/ui/Modal/Modal";
import Loader from "@shared/ui/Loader/Loader";

const LoginForm = lazy(() =>
  import("../LoginForm/LoginForm").then(({ LoginForm }) => ({
    default: LoginForm,
  }))
);

interface LoginModalProps {
  onClose: () => void;
  isOpened: boolean;
}

export const LoginModal: FC<LoginModalProps> = ({ onClose, isOpened }) => {
  return (
    <Modal onClose={onClose} isOpened={isOpened}>
      <Suspense fallback={<Loader />}>
        <LoginForm onClose={onClose} />
      </Suspense>
    </Modal>
  );
};
