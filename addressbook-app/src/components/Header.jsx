import { useSystemContext } from "../context/SystemContext";

export function Header() {
  const {leftBtn, righBtn} = useSystemContext();

  return <div className={'Header'}>
      {leftBtn && <button className={"Header-btn-add"} onClick={leftBtn.handler}>
        {leftBtn.text} 
      </button>}

      <input className={'Header-input'}/>

      {righBtn && <button className={"Header-btn-settings"} onClick={righBtn.handler}>
        {righBtn.text}
      </button>}
  </div>
}