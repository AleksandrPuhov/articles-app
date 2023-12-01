import { FC, ReactNode } from "react";

import cls from "./Modal.module.scss";

import { OverlayingPopup } from "../OverlayingPopup/OverlayingPopup";
import { classNames } from "@shared/lib/classNames/classNames";
import { useMount } from "@shared/hooks/useMount";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  isOpened: boolean;
  maxWidth?: number;
}

export const Modal: FC<ModalProps> = ({
  children,
  onClose,
  isOpened,
  maxWidth = 400,
}) => {
  const { mounted } = useMount({ opened: isOpened });

  if (!isOpened && !mounted) {
    return null;
  }

  const mods: Record<string, boolean> = {
    [cls.modalOpened]: isOpened && !!mounted,
    [cls.modalClosing]: !isOpened && !!mounted,
  };

  return (
    <OverlayingPopup onClose={onClose} isOpened={!!isOpened || !!mounted}>
      <div className={classNames([cls.modal], mods)} style={{ maxWidth }}>
        {children}
      </div>
    </OverlayingPopup>
  );
};
