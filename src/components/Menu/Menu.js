/* eslint-disable default-case */
import "./Menu.css";

import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from "../../store/ui-slice.js";

const Menu = ()=>{
  const activeMenu = useSelector(state=>state.ui.activeMenu); 
  const speakersOffset = useSelector(state=>state.ui.speakersOffset);
  const dispatch = useDispatch();
  
  const menuElements=["о мероприятии","спикеры"]

  const onMenuClick=(idx)=>{
    dispatch(uiActions.setActiveMenu(idx));
    switch (idx){
      case 0: 
        window.scrollTo(0,0);
        dispatch(uiActions.setInVisibleMenuCompact());
        
        break;
      case 1:
        window.scrollTo(0,speakersOffset-300);
        dispatch(uiActions.setInVisibleMenuCompact())
        break;
    }
  }

  return (
    <div className="menu">
      {menuElements.map((el,idx)=>{
        let menuElementClass = idx === activeMenu ? "menu__element menu__element_active" : "menu__element";
        return(
          <div 
            key={"menu"+idx} 
            className={menuElementClass}
            onClick={()=>{onMenuClick(idx)}}
          >
            {el}
          </div>
        )
      })}
    </div>
  )
}

export default Menu;