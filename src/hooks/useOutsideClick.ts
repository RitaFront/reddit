import React, { useEffect, useRef, useState } from 'react';

interface IUseOutsideClick {
  onClose?: () => void;
}

export default function useOutsideClick(props: IUseOutsideClick) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        props.onClose?.();
      }
    }
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return { ref };
}
