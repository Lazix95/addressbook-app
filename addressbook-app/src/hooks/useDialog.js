import { useState } from "react";

export function useDialog({onClose, onSubmit} = {}) {
  const [open, setOpen] = useState(false);

  function show() {
    setOpen(true);
  }

  function hide() {
    setOpen(false);
  }

  function close() {
    onClose?.()
    hide();
  }

  function submit() {
    onSubmit?.();
    hide();
  }
  
  return {
    open,
    show,
    hide,
    close,
    submit
  }
}