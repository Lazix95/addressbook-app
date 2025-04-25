import { useEffect } from "react";
import { useSystemContext } from "../context/SystemContext";

export function useHeaderBtns(options) {
  const {setLeftBtn, setRightBtn} = useSystemContext();

  useEffect(() => {
    if (options.leftBtn) setLeftBtn(options.leftBtn);
    if (options.rightBtn) setRightBtn(options.rightBtn);
    
    return () => {
      setLeftBtn(null);
      setRightBtn(null);
    }
  }, [])

  return {};
}