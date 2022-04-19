import React from 'react';
// import styled from 'styled-components';


const MenuList = ({menuList}) :JSX.Element => {


  

 
  

  return (
      <>
        <div>
          메뉴리스트
        </div>
        <ul>
          {menuList.map((hangOverList) => (
            <li key={hangOverList.id}>{hangOverList.storeName}</li>
          ))}
        </ul>
      </>
    
  );
}

export default MenuList;