import React, { useState } from 'react';
import MenuList from '../../pages/MenuList';
// import styled from 'styled-components';


const CategoryButton = () :JSX.Element => {

  const [menuList, setMenuList] = useState([]);

  

  // 버튼 눌렀을 때 아래 버튼 아래 화면에 리스트 뿌리기
  const hangOverListButtonClick = (kind) => {
    if(kind === "hangover") {
      setMenuList([{
        id : "1",
        kind : "hangover",
        image : "",
        foodName : "해장국",
        storeName : "은희네 제주국",
        location : "",
      }])
    }else if ( kind === "choice"){
      setMenuList([{
        id : "1",
        kind : "choice",
        image : "",
        foodName : "돈까스",
        storeName : "연돈",
        location : "",
      }])
    }else{
      setMenuList([{
        id : "1",
        kind : "random",
        image : "",
        foodName : "아무거나",
        storeName : "랜덤하수",
        location : "",
      }])
    }
    
  }

  

  return (
      <>
        <div>
          <button type="button" onClick={() => hangOverListButtonClick("hangover")}>숙취해소</button>
          <button type="button" onClick={() => hangOverListButtonClick("choice")}>고를래!</button>
          <button type="button" onClick={() => hangOverListButtonClick("random")}>랜덤!</button>
        </div>
        <MenuList menuList={menuList} />
        {/* <ul>
          {menuList.map((hangOverList) => (
            <li key={hangOverList.id}>{hangOverList.storeName}</li>
          ))}
        </ul> */}
      </>
    
  );
}

export default CategoryButton;