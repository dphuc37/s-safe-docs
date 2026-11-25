import React, { type ComponentProps, type ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';

function Lightbox({ src, alt, onClose }: { src?: string; alt?: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.overlay} role="dialog" aria-modal="true" onClick={onClose}>
      <img className={styles.full} src={src} alt={alt} />
    </div>,
    document.body,
  );
}

export default function ZoomImage(props: ComponentProps<'img'>): ReactNode {
  const [open, setOpen] = useState(false);
  const { alt, className, ...rest } = props;
  const caption = alt?.trim();

  return (
    <>
      <span className={styles.figure}>
        <button type="button" className={styles.trigger} onClick={() => setOpen(true)}>
          <img decoding="async" loading="lazy" alt={alt} className={className} {...rest} />
        </button>
        {caption && <span className={styles.caption}>{caption}</span>}
      </span>
      {open && <Lightbox src={props.src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}
