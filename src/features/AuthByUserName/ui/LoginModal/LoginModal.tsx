import { FC, Suspense, lazy, memo } from "react";

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

export const LoginModal: FC<LoginModalProps> = memo(({ onClose, isOpened }) => {
  return (
    <Modal onClose={onClose} isOpened={isOpened}>
      <Suspense fallback={<Loader />}>
        <LoginForm onClose={onClose} />
      </Suspense>
    </Modal>
  );
});
