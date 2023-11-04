import { FC, ReactNode, useState } from "react";
import { usePopper } from "react-popper";

import { Portal } from "../Portal/Portal";

interface PopoverProps {
  children: ReactNode;
  referenceElement?: Element;
  // onClose: () => void;
  // isOpened: boolean;
}

export const Popover: FC<PopoverProps> = ({
  children,
  referenceElement,
  // onClose,
  // isOpened,
}) => {
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  return (
    <Portal>
      <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        {children}
      </div>
    </Portal>
  );
};
