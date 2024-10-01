import { useEffect } from "react";

export const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  onClickOutside: () => void,
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (event.target !== null) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          onClickOutside();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};
