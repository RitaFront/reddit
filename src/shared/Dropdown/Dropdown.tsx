import React, { useEffect, useRef, useState } from 'react';
import styles from './dropdown.scss';
import ReactDOM from 'react-dom';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onCLose?: () => void;
}

type Coords = {
  left: number;
  top: number;
};

const NOOP = () => {};

export function Dropdown({
  button,
  children,
  isOpen,
  onOpen = NOOP,
  onCLose = NOOP,
}: IDropdownProps) {
  const dropdown = document.getElementById('dropdown_root');
  const ref = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<Coords | null>(null);
  const [isDropdownOpen, setisDropdownOpen] = useState(isOpen);

  if (!dropdown) return null;

  useEffect(() => setisDropdownOpen(isOpen), [isOpen]);
  useEffect(
    () => (isDropdownOpen ? onOpen() : onCLose()),
    [isDropdownOpen]
  );

  const getCoords = (): Coords | null => {
    const rect = ref.current?.getBoundingClientRect();
    const bodyPosition = document
      .querySelector('body')
      ?.getBoundingClientRect().top;

    if (rect) {
      return {
        top: rect.top + Math.abs(bodyPosition ?? 0) + rect.height,
        left: rect.left + rect.width / 2,
      };
    }

    return null;
  };

  useEffect(() => {
    if (!isDropdownOpen) return;
    const coord = getCoords();
    setCoords(coord);
  }, [isDropdownOpen]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setisDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <div className={styles.container} ref={ref}>
      <div onClick={handleOpen}>{button}</div>
      {isDropdownOpen &&
        ReactDOM.createPortal(
          <div
            className={styles.listContainer}
            style={{ top: coords?.top, left: coords?.left }}
          >
            <div
              className={styles.list}
              onClick={() => setisDropdownOpen(false)}
            >
              {children}
            </div>
          </div>,
          dropdown
        )}
    </div>
  );
}
