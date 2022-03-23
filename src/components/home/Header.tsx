import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    color : black;  
    font-size: 2em;
    text-align: center;
    background-color: yellowgreen;
    padding: 0.3em 0 0.3em 0 ;
`;

const Header = () => {
  return (
    
        <div className='header'>
            <Title>
                <header>마 식 가</header>
            </Title>
        </div>
    
  );
}

export default Header;