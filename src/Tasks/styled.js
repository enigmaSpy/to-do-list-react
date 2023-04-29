import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
`;

export const Item = styled.li`
    width: 100%;
    margin: 10px 0;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;   
    
    ${({ hidden }) => hidden && css`
        display:none;
    `};
`;

export const Button = styled.button`
    color: #fff;
    padding: 10px;
    margin: 0 5px;
    border: none;

    &:hover{
        cursor: pointer;
    }
`;

export const ItemText = styled.span`
    padding: 10px;
    flex: 1;
    overflow-x: auto;
    border-bottom: 1px solid #000;

    ${({ done }) => done && css`
        text-decoration: line-through;
        color: #ccc;
    `};
`;