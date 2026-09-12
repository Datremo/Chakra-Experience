/**
 * Locks the body scroll without losing the current scroll position,
 * preventing the infamous iOS Safari "scroll jump to top" bug.
 */
let lockCount = 0;
let originalScrollY = 0;
let unlockTimeout: ReturnType<typeof setTimeout> | null = null;

export const lockScroll = () => {
  if (typeof window === 'undefined') return;
  
  if (unlockTimeout) {
    clearTimeout(unlockTimeout);
    unlockTimeout = null;
  }
  
  if (lockCount === 0) {
    originalScrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${originalScrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
  }
  lockCount++;
};

export const unlockScroll = () => {
  if (typeof window === 'undefined') return;
  
  lockCount = Math.max(0, lockCount - 1);
  
  if (lockCount === 0) {
    unlockTimeout = setTimeout(() => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, originalScrollY);
      unlockTimeout = null;
    }, 0);
  }
};
