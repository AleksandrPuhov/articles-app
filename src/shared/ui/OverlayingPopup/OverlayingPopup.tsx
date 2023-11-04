import { FC, ReactNode } from "react";

import cls from "./OverlayingPopup.module.scss";

import { Portal } from "../Portal/Portal";

interface OverlayingPopupProps {
  children: ReactNode;
  onClose: () => void;
  isOpened: boolean;
}

export const OverlayingPopup: FC<OverlayingPopupProps> = ({
  children,
  onClose,
  isOpened,
}) => {
  if (!isOpened) {
    return null;
  }

  return (
    <Portal>
      <div className={cls.container}>
        <div
          className={cls.overlay}
          role="button"
          tabIndex={0}
          onClick={onClose}
        />
        {children}
      </div>
    </Portal>
  );
};
