import { useSystemContext } from "../context/SystemContext";

export function useScrollControll() {
  const {setIsScrollHidden} = useSystemContext();

  function hide() {
    setIsScrollHidden(true);
  }

  function show() {
    setIsScrollHidden(false);
  }

  return {hide, show};
}