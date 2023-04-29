import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    @media (max-width: 767px){
        width:100%;
    };
    @media (max-width: 414px){
        justify-content: space-around;
 }
`;

export const Button = styled.button`
  background: transparent;
  border: 2px solid #333;
  color: #333;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 4px;
  margin-left:5px;
  transition: all 0.3s ease;
    &:hover{
    background: #333;
    color: #fff;
    cursor: pointer;
    };
 @media (max-width: 388px){
    margin:0;
    padding:8px;
 }

`;