import { useEffect, useState } from "react";

const ANIMATION_DELAY = 300;

export const useMount = ({ opened }: { opened: boolean }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, ANIMATION_DELAY);
    }
  }, [opened]);

  return {
    mounted,
  };
};
