import styled, {css} from "styled-components";

export const FormContent = styled.form`
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const TaskInput = styled.input`
    border-radius: 50px 0px 0 50px;
    padding: 10px 15px;
    width: 800px;
    max-width: 700px;
`;

export const Button = styled.button`
    border-radius: 0px 50px 50px 0px;
    padding: 10px 15px;
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
`;

export const StatusAlert = styled.div`
    height: 0px;
    overflow: hidden;
    text-align: center;
    background-color: rgba(244, 126, 150, 0.597);
    transition: height 0.2s ease-in-out;
    flex: 1;

    ${({active})=>active&&css`
        height: 20px;
    `};
`;

