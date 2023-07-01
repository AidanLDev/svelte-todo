

export const handleKeyDown = (e: KeyboardEvent & { currentTarget: EventTarget }, cb: () => any) => {
  if (e.code === 'Enter') {
    cb();
  }
};