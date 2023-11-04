import { FC, ReactNode } from "react";

import cls from "./Modal.module.scss";

import { OverlayingPopup } from "../OverlayingPopup/OverlayingPopup";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  isOpened: boolean;
}

export const Modal: FC<ModalProps> = ({ children, onClose, isOpened }) => {
  if (!isOpened) {
    return null;
  }

  return (
    <OverlayingPopup onClose={onClose} isOpened={isOpened}>
      <div className={cls.modal}>{children}</div>
    </OverlayingPopup>
  );
};
