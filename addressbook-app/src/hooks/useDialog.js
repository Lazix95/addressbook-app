import { useState } from "react";

export function useDialog({onClose, onSubmit} = {}) {
  const [open, setOpen] = useState(false);
  const [param, setParam] = useState(null);

  function show(item) {
    setOpen(true);
    setParam(item);
  }

  function hide() {
    setOpen(false);
    setParam(null);
  }

  function close() {
    onClose?.(param);
    hide();
  }

  function submit() {
    onSubmit?.(param);
    hide();
  }
  
  return {
    open,
    param,
    show,
    hide,
    close,
    submit
  }
}